bundle exec jekyll serve --livereload

# Personal Website
Codebase for https://jeffdevine.com.

## Required Tooling
To install everything locally, you'll need the following:

* [Homebrew](http://brew.sh/)
* Asdf
* Node 19.x
* Ruby 3.x

### Homebrew
Homebrew is a package manager for OSX. To install it, run the following from the command line:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Development Tools

### Local Website
To run a local version of the site, run the following:

```
bundle exec jekyll serve
```

For Live reload, add the argument `--livereload`.

### Build
To build the website for a `production` deploy, run the following command:

```
JEKYLL_ENV=production bundle exec jekyll build
```
