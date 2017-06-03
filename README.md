# AMD-NG2-UI #

## Setup ##

### Install NodeJS ####

Installation instructions are available [here](https://nodejs.org).

### Clone the repository locally ###

Note that this project uses a submodule for the demo project to avoid repeating code from the [AMD Angular Seed](https://github.com/amd-core/amd-angular-seed) project. To clone this project and include the submodule, run the following:

``` bash
$ git clone --recursive https://github.com/amd-core/amd-angular-ui.git
```

If you have already cloned the project non-recursively, then run the following in the root of the project:

``` bash
$ git submodule update --init --recursive
```

### Install the project's dependencies ###

The dependencies need to be installed for the both the main project and sub demo project.

``` bash
$ npm install
$ cd demo
$ npm install
```

### Initial project build ###

An initial project build is required to finish setting up the demo project.

``` bash
$ npm run build
```

### Link demo dependency ###

Now the demo's dependency on the main project can be linked to use the project instead of the npm installed version.

First navigate to the built version of the project and create a global npm link.

``` bash
$ cd dist/amd-angular-ui
$ npm link
```

Then navigate to the demo project and link to the new global npm link.

``` bash
$ cd ../../demo
$ npm link @amd-core/angular-ui
```

### Run the demo ###

``` bash
$ npm start
```
