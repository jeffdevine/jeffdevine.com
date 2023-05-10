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

### Asdf
Asdf is a tool version manager. The easiest install method is using `homebrew`:

```
brew install asdf
```
### Node & Ruby via Asdf
Next, install the plugins for **node** and **ruby**:

```
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

The versions for each language are stored in `.tool-versions`. To install both **node** and **ruby**, go into the root directory of the project and run:

```
asdf install
```

The final step is installing packages for **node** and **ruby**:

```
yarn install
bundle install
```

## Development Tools

### Local Website
To run a local version of the site, run the following:

```
bundle exec jekyll serve
```

For Live reload, add the argument `--livereload`.

### Build
To build the website for a `production` deployment, run the following command:

```
JEKYLL_ENV=production bundle exec jekyll build
```
