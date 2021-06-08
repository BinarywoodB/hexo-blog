---
title: Computer Networking Notes
date: 2021-06-08 13:28:49
tags:
- Computer Networking
categories:
- Tech
- CS Basis
---

## Overview

### 计算机网络的类别

* 信息时代，网络指的是“三网”：

    * 电信网络（固化网+移动网）
    * 有线电视网络
    * 计算机网络

* 电路交换（circuit switching）：建立连接 -> 通信 -> 释放连接

    ![circuit-switching](/images/tech/cs-basis/circuit-switching.png)

    缺点：电路中一个交换机或一条链路损坏则整个通信电路都要中断。

* 分组交换

* 三种交换方式的对比

    ![switching-comparasion](/images/tech/cs-basis/switching-comparasion.png)

### 计算机网络的体系结构

* OSI vs TCP/IP
    
    ![osi-tcpip](/images/tech/cs-basis/osi-tcpip.png)

* 五层协议的体系结构
    
    ![5-level-architecture](/images/tech/cs-basis/5-level-architecture.png)

## 物理层 Physical Layer

## 数据链路层 Data Link Layer

* 两种信道使用类型：
    
    * 点对点信道
    * 广播信道

* 数据链路层的简单模型

    ![data-link-layer-model](/images/tech/cs-basis/data-link-layer-model.png)

* 数据链路和帧

    * **链路(link)** 是一条无源的点到点的物理线路段，中间没有任何其他的交换结点。
        * 一条链路只是一条通路的一个组成部分。
    * **数据链路(data link)** 除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。
        * 适配器（即网卡）

* 三个基本问题：

    * 封装成帧（framing）

        ![framing](/images/tech/cs-basis/framing.png)
        
    * 透明传输

        ![transparent-transforming](/images/tech/cs-basis/transparent-transforming.png)

    * 差错控制

        ![crc](/images/tech/cs-basis/crc.png)
    
* 点对点协议PPP(Point-to-Point Protocol)：全世界使用最多的数据链路层协议。
    
    三个组成部分：
    * 一个将 IP 数据报封装到串行链路的方法
    * 链路控制协议 LCP (Link Control Protocol)
    * 网络控制协议 NCP (Network Control Protocol)

* 数据链路层的两个子层：

    * 逻辑链路控制 LLC (Logical Link Control)子层 （一般不考虑）
    * 媒体接入控制 **MAC (Medium Access Control)** 子层

        * **适配器**：
            
            网络接口板又称为通信适配器(adapter)或网络接口卡 NIC (Network Interface Card)，或“网卡”。 

            适配器的重要功能：
            * 进行串行/并行转换。
            * 对数据进行缓存。
            * 实现以太网协议。
    
            ![adapter](/images/tech/cs-basis/adapter.png)
            
            ![mac](/images/tech/cs-basis/mac.png)

            ![mac-frame](/images/tech/cs-basis/mac-frame.png)

* 载波监听多点接入/碰撞检测 CSMA/CD (Carrier Sense Multiple Access with Collision Detection)

    ![csma](/images/tech/cs-basis/csma.png)

* 集线器

    ![hub](/images/tech/cs-basis/hub.png)

* 网桥 bridge

    ![bridge](/images/tech/cs-basis/bridge.png)

## 网络层 Network layer

* 网络层向上只提供简单灵活的、**无连接的**、**尽最大努力交付**的**数据报服务**。

* IP协议及配套协议

    ![ip](/images/tech/cs-basis/ip.png)

* 中间设备又称为中间系统或中继(relay)系统。

    * 物理层中继系统：转发器(repeater)
    * 数据链路层中继系统：网桥或桥接器(bridge)
    * 网络层中继系统：路由器(router)
    * 网桥和路由器的混合物：桥路器(brouter)
    * 网络层以上的中继系统：网关(gateway)

* IP数据报

    ![ip-datagram](/images/tech/cs-basis/ip-datagram.png)

* IP地址
    ![ip-address](/images/tech/cs-basis/ip-address.png)

