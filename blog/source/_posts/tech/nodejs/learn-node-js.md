---
title: Learn Node.js
date: 2021-03-07 20:27:45
tags:
- Tutorial
- Node.js
- Youtube
- Tutorial
categories:
- Tech
- NodeJS
---

![node logo](/images/tech/nodejs/nodejs-logo.png)


## [Unit 1: Overview of Node.js Learning Path](https://www.youtube.com/watch?v=dlwW2uvQtGY)

* Node Architecture
    
    ![node architecture](/images/tech/nodejs/node-architecture.png)
* Libuv.org
* node modules
* [Overview of Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
* [Easy profiling for Node.js Applications](https://nodejs.org/en/docs/guides/simple-profiling/)
* ![node event loop](/images/tech/nodejs/event-loop.png)


## [Unit 2: Installing Node.js, npm, and VSCode](https://www.youtube.com/watch?v=jOrPHKqz_iE)

### Install Node and Npm

1. Install from nodejs.org
    * https://nodejs.org/en/download/
    * https://nodejs.org/en/about/releases/

        ![release schedule](/images/tech/nodejs/release-schedule.svg)

1. [Install Node & Npm via node version manager (nvm)](https://github.com/nvm-sh/nvm)


## [Unit 3: A tour of Node.js](https://www.youtube.com/watch?v=MvOtK6F1HWI)

### Node.js Architecture

Node.js is a JavaScript runtime built on [Chrome V8 JavaScript engine](https://v8.dev/).

![node architecture](/images/tech/nodejs/node-architecture.png)

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
* [Apache Benchmark](https://httpd.apache.org/docs/2.4/programs/ab.html)
* [loadtest](https://www.npmjs.com/package/loadtest)

    ```
    loadtest -c 10 --rps 200 http://mysite.com/
    ```

Consider case where each request to a web server takes 50ms to complete and 45ms of that 50ms is database I/O that can be done asynchronously. Choosing **non-blocking** asynchronous operations frees up that 45ms per request to handle other requests. This is a significant difference in capacity just by choosing to use **non-blocking** methods instead of **blocking** methods.


## [Unit 5: The event loop](https://www.youtube.com/watch?v=X9zVB9WafdE)

[A complete guide to the Node.js event loop](https://blog.logrocket.com/a-complete-guide-to-the-node-js-event-loop/)


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


## [Unit 9: Unit testing and linting with Node.js](https://www.youtube.com/watch?v=IciEzaWWtgI)
There are two aspects to code quality that you can automate.

* Testing
    * A test framework [[Mocha.js](https://mochajs.org)]
    * An assertion library (if the framework doesn't come with one) [[Chai.js](https://chaijs.org)]
    * A test doubles library (again, if the framework doesn't provide one) [[Sinon.js](https://sinonjs.org)]
    * Code coverage utility [[Istanbul](https://istanbul.js.org)]
* Linting
    * A linter with parser [[ESlint](https://eslint.org)]
    * A configuration to apply rules to your code

[How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## [Unit 10: Application logging with Winston and Log4js](https://www.youtube.com/watch?v=To9F0Xv3adk&list=PL_Kpc42ZZa74gs2Sc94M2wAhZvwWDyd5o&index=9)

Application logging is a reality that we as developers have to deal with, and it isn't going anywhere. When our applications run, things happen. Some of those things are important. Others are not.

Logs tell us what happened and are useful when supporting our applications. console.log() is fine for prototypes, but for production quality applications, you need production quality logging.

You can write this code yourself, but the logging problem has been solved.

Two popular third party logging packages for Node applications

* [Winston](https://www.npmjs.com/package/winston)
* [Log4js](https://www.npmjs.com/package/log4js​)

Logging Example on GitHub: [link](https://github.com/jstevenperry/IBM-Developer/tree/master/Node.js/Course/Unit-10)

## [Unit 11: ExpressJS and Pug](https://www.youtube.com/watch?v=kaql4sIjpbU&list=PL_Kpc42ZZa74gs2Sc94M2wAhZvwWDyd5o&index=10)

* ExpressJS: for a web framework, which includes routing.
* Pug: for the user interface.

ExpressJS and Pug Example on GitHub: [link](https://github.com/jstevenperry/IBM-Developer/tree/master/Node.js/Course/Unit-11)

## [Unit 12: MongoDB](https://www.youtube.com/watch?v=FBmSzlpyVAI&list=PL_Kpc42ZZa74gs2Sc94M2wAhZvwWDyd5o&index=11)

**MongoDB** is one of the most popular choices for storing data used with Node applications.

* [NoSQL databases (WikiPedia)](https://en.wikipedia.org/wiki/NoSQL)
* MongoDB:
    
    * [GitHub repo](https://github.com/mongodb/mongo) 
    * [Getting Started](https://docs.mongodb.com/manual/tutorial/getting-started/) 
* [Example](https://github.com/jstevenperry/IBM-Developer/tree/master/Node.js/Course/Unit-12)