---
title: Delay in a TypeScript Loop
date: 2021-07-07 10:30:16
tags:
- Tutorial
- Node.js
- settimeout
categories:
- Tech
- NodeJS
---

```typescript
let finished: boolean = false;
let result = doAJob().then((jobResult) => {
    finished = true;
    return jobResult;
});
pollStatus();   // poll job status while job not finised.

async function pollStatus(): Promise<void> {
  console.log("polling status...");

  setTimeout(async () => {
    // call sdk to poll status and print
    const status = sdk.getStatus();
    console.log(`status: ${status}`);

    if (!finished) {
      pollStatus(); // call loop again
    }
  }, 10000);
}
```