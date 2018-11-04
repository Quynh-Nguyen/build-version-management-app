# React Native Project: Maverapp

[<img src="https://raw.githubusercontent.com/Quynh-Nguyen/build-version-management-app/master/Maverapp.png">](Maverapp)

## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)
* [Features](#features)
* [Writing and Running Tests](#writing-and-running-tests)

## Updating to New Releases

## Features

- [ ] Listing Projects
- [ ] Listing Versions of one Project
- [ ] Install Project to your device with version you choice

## Build Maverapp Project

### Installation
* Install Nodejs & npm
  * Recommend use
    - [Yarn](https://yarnpkg.com/en/docs/install)
    - [NVM](https://github.com/creationix/nvm)
* Install react native: [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
* Go to root project and install module packages:

```
npm install
# or
yarn
```

### Running
* At root project use command:
  - iOS: `yarn start ios`
  - android: `yarn start android`

### Tools
* [Using Atom Editor](https://atom.io/)
* Install Atom packages: atom-beautify, linter, linter-eslint, react

### Coding
* [React Native](https://facebook.github.io/react-native/docs/components-and-apis.html)
* [Redux](https://redux.js.org/introduction)
* [ESLint](https://eslint.org)
* [React Navigation](https://reactnavigation.org/docs/getting-started.html)
* [Javascript ECMAScript 6](http://es6-features.org/)
* [Flex Box](https://www.sketchingwithcss.com/samplechapter/cheatsheet.html)
* [Mobx](https://mobx.js.org/)

### Source Tree

```
build-version-management-app
├── App.js
├── App.test.js
├── Maverapp.png
├── README.md
├── android
├── app.json
├── ios
├── package.json
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   ├── Button
│   │   ├── Card
│   │   ├── Input
│   │   ├── ListItem
│   │   ├── Navigation
│   │   ├── Project
│   │   ├── Row
│   │   └── Text
│   ├── containers
│   │   ├── Auth
│   │   ├── Login
│   │   ├── Main
│   │   ├── Project
│   │   ├── Register
│   │   ├── Splash
│   │   └── Version
│   ├── layouts
│   │   ├── MasterLayout.js
│   │   └── index.js
│   ├── navigators
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── main.js
│   │   ├── project.js
│   │   └── tabbar.js
│   ├── reducers
│   │   ├── app.js
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   ├── services
│   │   └── reducer.js
│   ├── store
│   │   ├── NavStore.js
│   │   └── index.js
│   ├── styles
│   │   ├── MasterStyle.js
│   │   └── index.js
│   └── utils
│       ├── Images.js
│       ├── LayoutUtils.js
│       ├── axios.js
│       ├── checkStore.js
│       ├── constants.js
│       ├── index.js
│       ├── injectReducer.js
│       ├── injectSaga.js
│       ├── reducerInjectors.js
│       └── sagaInjectors.js
└── tsconfig.json
```

### Credits
* Quynh Nguyen - likeguitarz@gmail.com
* Hung Dang - hungqd
* Hanh Tran - peteyhanh@gmail.com
* Tan Nguyen (Backend) - 
* Tai Le (Backend) - 
* ... join with us
