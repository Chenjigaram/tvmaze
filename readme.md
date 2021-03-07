# TVMaze App

Application that allows users to view a lists of TV shows based on different genres (drama, comedy, sports, etc.).

* [Live App](https://tvmaze.z1.web.core.windows.net/)
* [Pipeline](https://dev.azure.com/chenjigaramnaveen/retroboard/_build?definitionId=16)

## Quick start

### Dependencies

What you need to run this app:

* `node` and `npm`

```bash
# clone the repo
$ git clone https://github.com/Chenjigaram/tvmaze.git

# change directory to app
$ cd tvmaze

# install the dependencies with npm
$ npm install

# start the server
$ npm start

```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

You will see home page as below:
[![home](https://github.com/Chenjigaram/tvmaze/blob/master/screenshots/home.png?raw=true)](https://github.com/Chenjigaram/tvmaze/blob/master/screenshots/home.png?raw=true)

### Developing

#### Build files

* single run: `npm run build`
* build files and watch: `npm start`

### Testing

#### Unit Tests

* single run: `npm test`

## Application Technologies

List of Technologies

* [Angularjs](https://angularjs.org/)
* [Webpack 4](https://webpack.js.org/concepts/)
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* [Jasmine](https://jasmine.github.io/)
* [Azure Pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops)

### AngularJs

AngularJS is a superior framework by Google launched in 2009, which is created to make the front-end development procedure easier to manage.

* Two way Data Binding
* MVC
* Code Reusability
* ES6 Compatability
* Easy to learn

### Webpack

Webpack is a tool that lets you compile JavaScript modules, also known as module bundler.

* Helps you bundle your resources.
* Watches for changes and re-runs the tasks.
* can run Babel transpilation to ES5, allowing you to use the latest JavaScript features without worrying about browser support.

### Boostrap 4

Quickly design and customize responsive mobile-first sites with Bootstrap

### Jasmine

Jasmine is a framework for testing JavaScript code and also has wide set of assertions

### Azure Pipelines

Azure pipelines is a easy to automate the CI and CD of your app
