'use strict';

var fs = require('fs');
var github = require('octonode');
var path = require('path');
var rl = require('readline-sync');

var username, password, client;
var credsFile = path.join(__dirname, 'creds.file');

function deleteRepo(repo, callback) {
    callback = callback || function() {};
    
    // Load the credentials/client if not initialized
    username || readCredentials();
    client = client || github.client({ username: username, password: password });
    
    // One-liner to delete the repo (where the actual work gets done)
    client.repo(repo).destroy(callback);
}

function inferOwner(repo) {
    username || readCredentials();
    return [username, repo].join('/');
}

function loginUser() {
    console.log('Please enter your GitHub credentials.');
    username = rl.question('Username: ');
    password = rl.question('Password: ', { hideEchoBack: true }); // don't echo for password
    saveCredentials(username, password);
}

function readCredentials() {
    var contents = fs.readFileSync(credsFile, 'utf8');
    contents = new Buffer(contents, 'base64').toString(); // base64 -> utf8
    var lines = contents.split('\n');
    username = contents[0];
    password = contents[1];
}

function saveCredentials(name, pass) {
    var contents = [name, pass].join('\n');
    var base64 = new Buffer(contents).toString('base64'); // utf8 -> base64
    fs.writeFileSync(credsFile, base64);
}

function showHelp() {
    var lines = [
        'git delete lets you delete GitHub repos from the command line.',
        'Usage: git delete [--login] [repos]',
        '',
        '--login lets you enter your credentials for GitHub, so you can',
        "write something like `git delete foobar` and it'll run as if you",
        'had typed `git delete yourname/foobar`.',
        '',
        'The repos, of course, are a list of the repositories you want to delete.'
    ];
    
    lines.forEach(function(line) {
        console.log(line);
    });
}

var args = process.argv.slice(2);

if (args.indexOf('-?') !== -1 || args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1) {
    // display help and exit
    showHelp();
    process.exit(0);
}

if (args.indexOf('--login') !== -1) {
    // have the user login before processing the repos
    args = args.filter(function(arg) {
        // remove all occurrences of --login
        return arg !== '--login';
    });
    
    loginUser();
}

// TODO: Implement this in parallel for perf.
args.forEach(function(repo) {
    if (repo.indexOf('/') === -1) // infer the owner
        repo = inferOwner(repo);
    
    deleteRepo(repo, console.error);
});
