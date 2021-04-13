---
title: How to Build a CLI Tool
date: 2021-04-13 15:23:27
tags:
- CLI
categories:
- Tech
- Toolkit
---

## Ref

* [IBM: Overview of the command-line tool](https://www.ibm.com/docs/en/acfc?topic=tool-overview-command-line)
* [Best Practices Building a CLI Tool for Your Service](https://zapier.com/engineering/how-to-cli/)

## Background
The command line has become a powerful way for developers to interact with cloud services. Cloud computing services, continuous integration products, and some APIs have their own CLIs.
## Points
1. Provide an Excellent Help Screen

    **usability** and **discovery** are paramount in a CLI application.
    
    ![cli-example](/images/tech/toolkit/how-to-build-a-cli-tool/cli-example.png)

1. "Steal, Steal, Steal"

	Look at the good patterns in Linux and other tools you respect.
    - always support short and long format for flags