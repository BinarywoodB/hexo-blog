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
    ```bash
    # Clean cache
    rm -rf node_modules
    rm package-lock.json
    npm cache clean -f

    # Install packages
    npm i

    # Check npm packages version
    npm outdated

    # Update pacakges
    npm update
    ```