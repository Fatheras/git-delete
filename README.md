# git-delete

A command-line tool for automatically deleting GitHub repos.

## Installation

Prerequisites: [Node.js](https://nodejs.org/en/download/package-manager/), [git](https://git-scm.com/download)

### Windows

```cmd
git clone git@github.com:jamesqo/git-delete.git
cd git-delete
@powershell "$path = [Environment]::GetEnvironmentVariable('PATH', 'User'); [Environment]::SetEnvironmentVariable('PATH', ""$path;$pwd"", 'User')"
```

### Mac/Linux

```bash
git clone git@github.com:jamesqo/git-delete.git
cd git-delete
pwd -P | xargs -i echo 'export PATH="$PATH:{}"' | tee -a ~/.profile
```

## License

[MIT](LICENSE)
