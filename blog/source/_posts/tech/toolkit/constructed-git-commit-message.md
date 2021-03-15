---
title: Constructed Git Commit Message
date: 2021-01-08 17:26:24
tags:
- Git
- Commit
- Best Practice
categories:
- Tech
- Toolkit
---

# Constructed Git Commit Message

## Git Commit Message Conventions

* [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)
* [Udacity Git Commit Message Style Guide](http://udacity.github.io/git-styleguide/)
* [阮一峰的网络日志：Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

![git-commit-message.png](/images/tech/toolkit/constructed-git-commit-message/git-commit-message.png)

## Commitizen

1. Install committizen globally
    ```bash
    npm install -g commitizen
    ```

1. Run the below command to support Angular commit message convention
    ```bash
    commitizen init cz-conventional-changelog --save --save-exact
    ```

1. Each time you want to `git commit`, use `git cz` instead.

![git-cz-example.png](/images/tech/toolkit/constructed-git-commit-message/git-cz-example.png)
