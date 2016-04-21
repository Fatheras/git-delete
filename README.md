# git-delete

A command-line tool for automatically deleting GitHub repos.

## Installation

First, make sure you have [Node.js](https://nodejs.org/en/download/package-manager/), npm, and [git](https://git-scm.com/download) installed.

Then clone the repo and add it to your PATH:

```bash
cd /path/to/install/dir
git clone git@github.com:jamesqo/git-delete.git
cd git-delete
npm install octonode readline-sync

# Mac/Linux users
pwd -P | xargs -i echo 'export PATH="$PATH:{}"' | tee -a ~/.profile

# Windows users
@powershell "$path = [Environment]::GetEnvironmentVariable('PATH', 'User'); [Environment]::SetEnvironmentVariable('PATH', ""$path;$pwd"", 'User')"
```

## License

[MIT](LICENSE)
