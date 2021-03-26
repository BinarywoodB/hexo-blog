---
title: Npm Toolkit
date: 2021-03-26 12:59:42
tags:
- Npm
categories:
- Tech
- Toolkit
---

1. `npm install` fail with unknown reason.

    Try clean the cache before installation:
    ```
    npm cache clean -f
    rm -rf node_modules
    rm package-lock.json
    npm i
    ```