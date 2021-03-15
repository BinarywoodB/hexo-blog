---
title: Bash and Linux Toolkit
date: 2021-01-02 20:08:34
tags:
- Bash
- Linux
categories:
- Tech
- Toolkit
---

# Bash and Linux ToolKit

## 工具

### 标准输入输出

| Command       | Description  |
| :------------- |:-------------|
| `echo` | `echo "Hello world!" > hello.sh` |
| `printf` | `printf "Test the code %d times, and it still can fail the %d-th time." 100 101` |
| stdout stderr | ` ls 1> /tmp/ls.stdout 2> /tmp/ls.stderr ` |
| `&&` `||` |  `mkdir /tmp/good || echo "failed to create folder /tmp/good" ` <br/> <br/> short-circuiting|
| `$(this_is_a_command)` or ` `` `| ``` touch `seq 1 3` ``` or ` touch $(seq 1 3) ` |

### 文件系统

1. 工作目录(working directory)

    | Command       | Description  |
    | :------------- |:-------------|
    | `pwd` `ls` `cd` | |
    | `du` | `du -sh *` <br/> <br/> display disk usage statistics|
    | `df` | `df -h /mnt `<br/> <br/> display free disk space | 

1. 查找文件

    | Command       | Description  |
    | :------------- |:-------------|
    | `find` | `find . -type f` <br/><br/>  找到本目录下所有的文件并输出到屏幕 (包括子目录，下同) <br/>`-name`: `find .  -name "*.jpg" ` <br/> `-maxdepth`: `find -maxdepth 1` | 

1. 文件操作（移动、拷贝、创建文件夹）

    | Command       | Description  |
    | :------------- |:-------------|
    | `cp` `mv` `rm` `mkdir` `rmdir` | 在~/.bashrc文件中，加入下面的命令：<br/>`alias cp='cp -i'`<br/>`alias rm='rm -i' `<br/> `alias mv='mv -i'`<br/> <br/> `-i`: 如果命令会删除或者覆盖文件，会提示用户confirm。|
    | `chmod` | `chmod a-w somefile`  <br/><br/>  把somefile的所有写权限去掉|
    | `ln` | `ln -s $src $dest` <br/><br/>  创建一个软链接\$dest, 它指向的原文件在$src|


### 文件内容

1. 查看文件

    | Command       | Description  |
    | :------------- |:-------------|
    | `cat` | `cat <file>` | 
    | `head` `tail`| `head -n <file>` | 
    | `less` `more` | `less`是`more`的升级版，推荐使用`less`| 
    | `diff` | `diff file1 file2`|
    | `md5sum` | `md5sum <file>` <br/> <br/> 计算文件的md5码，用来比较本机和远程文件是否相同| 

2. 文件内容操作

    | Command       | Description  |
    | :------------- |:-------------|
    | `cut` | `cut -f1,3 file1`<br/><br/>cut out selected portions of each line of a file<br/>`-b` 按字节<br/> `-f`显示某几列 |
    | `bc` | `echo "1.212*3" \| bc` <br/><br/>任意精度的计算器 |
    | `wc` |`find . -name "*.jpg" \| wc -l` <br/><br/> 数出本目录下所有的jpg文件数量 |
    | `sort` | `sort a.list > a.sort` <br/><br/>  对文件a.list排序并写到a.sort <br/>`-u`: 去重<br/> `-k`: sort -k2,2 a.list, 按第2列排序 <br/>`-n`: 按数字排序<br/>`-V`:可以理解为加强版的按数字排序 <br/>`-r`: 倒序 <br/>`-R`: 随机|
    | `uniq` | ` cat list1 list2 \| sort \| uniq > final.list` <br/> <br/> 将list1, list2合并，排序后去重，写到final.list<br/>(其实sort一个命令就够了) <br/> `-c`: 用来统计很方便 <br/> `-u` <br/> `-d`|
    | `sed` | `sed "s@origin@corrected@" a.list -i`<br/> 将a.list中每行出现的第一个origin替换为corrected <br/> `-i`: inplace change<br/><br/> ```sed -i "s/old/new/g" `grep old -rl /www` ```<br/> 将`/www`路径下递归的所有文件中包含`old`字符串的文件中的`old`都替换成`new`|
    | `awk` | `awk -F'_' '{print $1}' a.list` <br/> <br/> 将a.list中每行按'_'分隔，每行输出分隔后的第一个字符串，例如`1_2_3`-> `1` |
    | `xargs` | `find . -name "*.jpg" \| xargs -i rm {}` <br/> `find . -name "*.jpg" \| xargs rm`<br/> <br/> 找到本目录下所有的jpg文件并删除 <br/>`-P`: 多进程 <br/> `-n`: 一般配合"-P"参数| 
    | `comm` | `comm -23 a.sort b.sort`<br/> <br/> 输出在a中，不在b中的行 |
    | `grep` | `cat a.list \| grep png`<br/> <br/> 找到a.list中包含png的行 <br/> `-R` 递归查找<br/> `-n` 列出行号  <br/> `-l` 列出匹配的文件名 <br/>  `-a` <br/> `-o`<br/>`-i`不区分大小写<br/> <br/> `grep "abc" . -nr` 查找当前路径下含有“abc”的文件，列出文件名，行号和匹配内容<br/> `grep "abc" . -lr` 查找当前路径下含有“abc”的文件，列出文件名 |
    | `rev` | ` rev <file> `<br/>  ```find . -type f \| rev \| cut -d'/' -f1 \| rev # revcut'/' ``` <br/> <br/> reverse the file(or reverse the stdin if no file provided)|


### 系统相关

| Command       | Description  |
| :------------- |:-------------|
| `htop` `top` |查看各个进程的实时CUP占用率、内存使用，进程ID，命令行，启动时间，用户等信息。以及机器整体的CPU占用率和内存使用情况。 |
| `ps` | `ps aux` <br/> `ps auxf`  |
| `dstat` | 系统资源统计。可以查看每秒的CPU，磁盘读写，网络出入等信息 |
| `nvidia-smi ` | 查看GPU的状态 |
| `ssh` |  |
| `scp` | `scp -r $scr $dest` <br/><br/>机器之间复制文件 |
| `rsync` | `rsync -avzP $src $dest`<br/> <br/> 和scp接近，文件传输工具。特别适用于大量小文件场合，此时速度会明显快于scp。<br/>  `-e`: `rsync -avhP -e "ssh -carcfour"`<br/>可以指定ssh参数,如端口/证书等|
|`tmux` | https://gist.github.com/MohamedAlaa/2961058 <br/> <br/> tmux is a terminal multiplexer，你会经常在服务器上工作，应该尽快掌握tmux |
| `kill` `pkill` `killall` | `kill <process_id>` <br/> `kill -9 <process_id>` <br/> `killall python` <br/> `pkill _unittest` <br/><br/> 杀死进程|
| 后台运行相关 | `./a_time_comsuming_process &> 1.log`<br/> `jobs`<br/> `fg` (ctrl-z)<br/> `bg` (ctrl-z)|


### 网络相关

| Command       | Description  |
| :------------- |:-------------|
| `netstat` | `netstat -anp\|grep <port>` 网络详细信息 |
| `lsof` | `lsof -i:<port>` |
| `ping` | `ping www.baidu.com` |
| `ifconfig` |  |

### 常用工具

| Command       | Description  |
| :------------- |:-------------|
| `wget` | `wget http://some.server.com/thewantedarticle.pdf -O /tmp/local.pdf` <br/> 下载工具 |
| `curl` |  |
| `jq` | 用于解析json <br/>`$ echo '{"key1":"value1","key2":"value2"}' \| jq '.key2'` <br/> `"value2"` |
| `parallel` |  用于并行执行多个相近的命令 <br/> `cat 20urls.list \| parallel -j 4 wget -q {} ` |
| `xargs` | `xargs`非常强大 <br/> `find . -type f \|grep '2018/03' \| xargs -I {} wc -l {} ` <br/> `find . -type f \|grep '2018/03' \| xargs wc -l`| 

## Linux Package Manager

| Command       | Description  |
| :------------- |:-------------|
| `sudo apt-get update` | 更新源列表中的软件列表 |
| `sudo apt-get upgrade` | 把本地已安装的软件，与刚下载的软件列表里对应软件进行对比，如果发现已安装的软件版本太低，就会提示你更新。 |

## Bash脚本语法

"#！": shebang。使用`chmod +x file`使sh脚本文件可以运行。
```bash
#!/bin/bash
```

### 变量

1. 基本用法

    ```bash
    des="awe and cool"
    echo $des
    echo ${des}
    echo "This is ${des}"
    ```

1. 内置变量

    `$0`, `$1`, `$2`...: 脚本参数

1. 输出赋值

    ```bash
    ret=`cat readme.txt`
    echo $ret

    ret=$(cat readme.txt)
    echo $ret
    ```

1. 运算

    let: 

    ```bash
    let "a = 5 + 6"
    echo $a

    x=11
    y=22
    let "z = x * y"
    echo $z
    ```

    expr:

    ```bash
    $ expr 5 + 6
    11

    $ foo=$(expr 5 + 6)
    $ echo $foo
    11
    ```
    注意：运算符和各个数字之间需要有空格

    双括号

    ```bash
    a=$((5+6))
    ```

1. 判断语句

    ```bash
    if <condition>
    then
        <cmd>
    else
        <cmd>
    fi
    ```

    ```bash
    tmp=35
    if [ ${tmp} -ge 30 ]
    then
        echo "It's too hot"
    fi
    ```

    | Operator       | Description  |
    | :------------- |:-------------|
    |`! EXPRESSION`| The EXPRESSION is false.
    |`-n STRING`| The length of STRING is greater than zero.
    |`-z STRING`|The lengh of STRING is zero (ie it is empty).
    |`STRING1 = STRING2`| STRING1 is equal to STRING2
    |`STRING1 != STRING2`| STRING1 is not equal to STRING2
    |`INTEGER1 -eq INTEGER2`| INTEGER1 is numerically equal to INTEGER2
    |`INTEGER1 -gt INTEGER2`| INTEGER1 is numerically greater than INTEGER2
    |`INTEGER1 -lt INTEGER2`| INTEGER1 is numerically less than INTEGER2
    |`-d FILE`| FILE exists and is a directory.
    |`-e FILE`| FILE exists.
    |`-r FILE`| FILE exists and the read permission is granted.
    |`-s FILE`| FILE exists and it's size is greater than zero (ie. it is not empty).
    |`-w FILE`| FILE exists and the write permission is granted.
    |`-x FILE`| FILE exists and the execute permission is granted.

    test命令：

    ```bash
    $ test 5 -ge 4
    $ echo $?
    0
    ```
    test命令的结果，0表示true或命令运行成功；1表示false或运行失败。

1. 布尔运算

    `&&`, `||`

    ```bash
    if [ $code_review = "pass" ] && [ $regression_test = "pass" ]
    then
    echo "ship it!"
    fi
    ```

1. 循环语句

    ```bash
    for var in <list>
    do
        <cmd>
    done
    ```
    
    ```bash
    for name in John, Emma, Tom
    do
        echo "My name is $name"
    done

    for num in {1..10}
    do
        echo "count $num"
    done
    
    for ((i=0; i<10; i++))
    do
        echo "count $i"
    done
    ```

1. until语句

    ```bash
    until [ some_test ]
    do
        <cmd>
    done
    ```

    ```bash
    suffix=1
    until [ ! -e "foo${suffix}" ]
    do
    let suffix++
    done
    echo "The file name foo${suffix} is good.
    ```

1. break

1. continue

1. 函数

    ```bash
    function_name () {
    <commands>
    }
    ```

    ```bash
    discuss_langauges() {
    language1=$1
    language2=$2
    echo "$1 is a good language."
    echo "$2 is also a good language."
    }

    # 调用不需括号
    discuss_langauges c++ python
    ```

    ```bash
    find_cpp_files() {
    local folder=$1
    local ret=$(find ${folder} -name '*.cpp' | wc -l)
    return $ret
    }
    folder=/home/hchen/code/ficus/common/machine_learning
    find_cpp_files $folder
    num_files=$?
    echo "There are ${num_files} cpp files in ${folder}"
    ```

### 调试技巧

* `set -e`
* `set -x`

### 实用案例

1. Test if a comand outputs an **empty string**: 

    `if [[ $(YOUR_COMMAND)]]`

    ```bash
    # ls directory
    if [[ $(ls -A) ]]; then
        echo "there are files"
    else
        echo "no files found"
    fi

    # grep file context 
    if [[ $(cat file | grep key_word) ]]; then
    echo "find key_word in the file"
    then 
    echo "Not found"
    fi
    ```

2. Check whether the last command complete successfully.
    
    `$?`: the exit code of the last command (zero for success, non-zero for failure).
    
    ```bash
    files=$(ls -A)
    if [[ $? != 0 ]]; then
        echo "Command failed."
    elif [[ $files ]]; then
        echo "Files found."
    else
        echo "No files found."
    fi
    ```