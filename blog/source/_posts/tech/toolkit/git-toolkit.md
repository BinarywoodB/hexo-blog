---
title: Git Toolkit
date: 2021-01-02 20:34:57
tags: 
- Git
categories:
- Tech
- Toolkit
---

# Git ToolKit

##  Git config
  
  ```bash
  git config -l # list all the config of the repo
  git config --global -l # list all global config
  git config --global core.whitespace cr-at-eol # (Windows Git): Hide ^M (Carriage Return) in Diff
  git config --global core.autocrlf true # 提交时转换为LF(Linux \n)，检出时转换为CRLF(Windows \r\n)
  ```

## Create a new branch

1. [create a new branch and track remote branch](https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF)

    ```bash
    $ git checkout -b serverfix origin/serverfix
    Branch serverfix set up to track remote branch serverfix from origin.
    Switched to a new branch 'serverfix'
    ```

1. Create a new feature branch in **remote**.

    ```bash
    # 1. Create a new branch:
    git checkout -b feature_branch_name

    # 2. Edit, add and commit your files.

    # 3. Push your branch to the remote repository:
    git push -u origin feature_branch_name
    ```

## Undo the most recent commit

```bash
git reset HEAD~
```

##  Git  submodule

1. If you want to git clone a repo alone with submodules. Use the following command:

    ```bash
    git clone --recursive https://github.com/<repo-name>.git
    ```

1. If you have git clone a repo with submodule, you can find submodules' folders, but the folders are empty.

    ```bash
    git clone https://github.com/<repo-name>.git
    git submodule init        # Init your local configuration file
    git submodule update      # Will pull submodules you need
    ```
  Use the above commands and you can have a complete repo.

## Git clone

1. git clone a private repo

    ```bash
    # Normal case
    git clone https://username:password@github.com/username/repository.git
    # or later input password
    git clone https://username@github.com/username/repository.git
    Password:

    # [!!!] When using two-factor authentication(https://stackoverflow.com/a/52011442/8522166)
    # 2fa(https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
    $ git clone https://github.com/username/repo.git
    Username: your_username
    Password: your_token
    # or inline
    git clone https://username:token@github.com/username/repository.git
    ```

1. git clone a single branch
    
    ```bash
    git clone --single-branch --branch <branchname> host:/dir.git
    ```

## Git pull

### [`git pull` & `git pull origin master`]([https://www.quora.com/What-are-the-differences-between-git-pull-git-pull-origin-master-and-git-pull-origin-master](https://www.quora.com/What-are-the-differences-between-git-pull-git-pull-origin-master-and-git-pull-origin-master))

* `git pull` = `git fetch` + `git merge`

* `git pull --rebase` = `git fetch` + `git rebase`

* `git pull <repo> <branch>`:  
    1st argument by default is the current branch's `remote`.  
    2nd argument by default is the current branch's `merge`.

Say you are working on a local branch `dev`, whose upstream branch is `origin/dev`.

```bash
$ git branch -vv
* dev       328c854 [origin/dev] Chapter_5 outline
master    7dedf87 [origin/master] May 9 discussion (#14)

$ git config --get branch.dev.remote
origin
$ git config --get branch.dev.merge
refs/heads/dev
```
 
`git pull` will pull from `origin/dev` and merge to current `dev` branch.  
`git pull origin master` can pull `origin/master` and merge to current `dev` branch.[!!]

Example: 

You are developing on local `dev` branch, push to the `origin/dev` at times for a pr. Now the master has some new updates and you would like to sync with master. You can use `git pull origin master` to pull master's new update and merge to your branch.

```bash
$ git pull origin master
Merge branch 'master' of github.com:arthma/iot-book into dev
```

### Merge Two GitHub Repo

Say you have two github repo A and B. A is a copy of B and develop some features. Now you want to merge A back to B so the new feature can be added to B.

Go to B's repo, git pull A's code.

```bash
# In B repo. Pull A code
git pull git@github.com:A-organization/A-project-name.git
```

Then solve conflicts, submmit commit, git push, done.

## [Git rebase](http://gitbook.liuhui998.com/4_2.html)