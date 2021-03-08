---
title: Learn Node.js
date: 2021-03-07 20:27:45
tags:
- Tutorial
- Node.js
- Youtube
categories:
- Tutorial
---

![node logo](/images/tutorial/node/nodejs-logo.png)


## [Unit 1: Overview of Node.js Learning Path](https://www.youtube.com/watch?v=dlwW2uvQtGY)

* Node Architecture
    
    ![node architecture](/images/tutorial/node/node-architecture.png)
* Libuv.org
* node modules
* [Overview of Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
* [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling/)
* ![node event loop](/images/tutorial/node/event-loop.png)


## [Unit 2: Installing Node.js, npm, and VSCode](https://www.youtube.com/watch?v=jOrPHKqz_iE)

### Install Node and Npm

1. Install from nodejs.org
    * https://nodejs.org/en/download/
    * https://nodejs.org/en/about/releases/

        ![release schedule](/images/tutorial/node/release-schedule.svg)

1. [Install Node & Npm via node version manager (nvm)](https://github.com/nvm-sh/nvm)


## [Unit 3: A tour of Node.js](https://www.youtube.com/watch?v=MvOtK6F1HWI)

### Node.js Architecture

Node.js is a JavaScript runtime built on [Chrome V8 JavaScript engine](https://v8.dev/).

![node architecture](/images/tutorial/node/node-architecture.png)

* JavaScript Engine: [Chrome V8](https://v8.dev/docs)
* Event Loop: [libuv](http://libuv.org/)
* Node.js API: https://nodejs.org/docs/latest/api/

### ECMAScript Standard

* [ECMAScript 2015 (ES6) and beyond](https://nodejs.org/en/docs/es6/)
* [Node.js ES2015 (ES6) Support](https://node.green/)

### Read-Eval-Print-Loop (REPL)

### npm

npm consists of:

* the website: https://www.npmjs.com
* the CLI
* the registry


## [Unit 4: Node.js basic concepts](https://www.youtube.com/watch?v=kycaDCIcxP0)

### Node Modules
In the Node.js module system, each file is treated as a separate module.

* Built-in Modules
* Installed Modules from https://www.npmjs.com/
* Customized Modules

### Non-blocking I/O
[Overview of Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

### Load Testing



## [Unit 8: Node dependency management](https://www.youtube.com/watch?v=HOhTu3tl3Mw)

1. **Semantic version (semver)**

    * npm semver calculator: https://semver.npmjs.com/
    * **caret (aka hat) symbol, `^`** : include everything that does not increment the first non-zero portion of semver.
        ``` 
        "^2.1.9": >= 2.1.9 and < 3.0.0 
        ```
    * **tilde symbol, `~`** : include everything greater than a particular version in the same minor range.
        ```
        "^2.1.9": >= 2.1.9 and < 2.2.0
        ```
2. Visualization of npm dependencies: http://npm.anvaka.com/
