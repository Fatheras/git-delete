# git-delete

A command-line tool for automatically deleting GitHub repos.

## Installation

First, make sure you have [Node.js](https://nodejs.org/en/download/package-manager/), [npm](https://www.npmjs.com/), and [git](https://git-scm.com/download) installed.

Then clone the repo and add it to your PATH:

```bash
cd /path/to/install/dir
git clone git@github.com:jamesqo/git-delete.git
cd git-delete
npm install octonode readline-sync

# Mac/Linux users
pwd -P | xargs -i echo 'export PATH="$PATH:{}"' | tee -a ~/.profile

# Windows users (from PowerShell)
$path = [Environment]::GetEnvironmentVariable('PATH', 'User')
[Environment]::SetEnvironmentVariable('PATH', "$path;$pwd", 'User')
```

## Usage

```
git delete [--login] [repos]
```

- `--login` lets you login and enter your credentials, which are stored in a base64-encoded file at the script's root.

- `repos` is a list of the repos you'd like to delete. For example, if your GitHub username was `little` and you want to delete `little/star`, you can either type in `git delete star` or `git delete little/star`.

## Known issues

- Need a more secure way to store the username/password
- `git delete --help` doesn't work, but `git-delete --help` does- something about a missing manpage

## License

[MIT](LICENSE)
