---
title: Digital Signature & Digital Certificate
date: 2021-03-08 17:38:18
tags:
- Network
- Digital Certificate
- Digital Signature
- SSL
- TLS
- SSL Certificate
- Certificate Authority (CA)
- Man-in-the-middle attack
- Youtube
categories:
- Authentication
---

## Digital Signature

### What is Digital Signature

A **digital signature** is equivalent to a handwritten signature in paper. It is an electronic verification of the sender.

A digital signature serves three basic purposes.
    
* Authentication
* Non-repudiation
* Integrity

### How Digital Signature Works

![what-is-digital-signature](/images/authentication/digital-signature-and-digital-certificate/what-is-digital-signature.png)

Keep in mind, digital signature is not about encrypting document, just like paper-based signature.

### Weakness of Digital Signature
Digital signature lacks authentication! (Anyone can pretend he is Bob.)

Man-in-the-middle attack:

![Man-in-the-middle-attack-1](/images/authentication/digital-signature-and-digital-certificate/Man-in-the-middle-attack-1.png)

![Man-in-the-middle-attack-2](/images/authentication/digital-signature-and-digital-certificate/Man-in-the-middle-attack-2.png)

So we need **digital certificate**!

## Digital Certificate

**Digital certificates** are electronic credentials issued by a trusted third party.

### Why Do We Need Digital Certificate

Because digital certificate verifies not only the identity of the owner, but also that the owner owns the public key.

Digital certificate verifies the digital signature is truly signed by the claimed signer.

### How SSL Certificate Works

#### Prerequisites
![pre](/images/authentication/digital-signature-and-digital-certificate/pre.png)

#### SSL Certificate Flow
![ssl-cer-flow](/images/authentication/digital-signature-and-digital-certificate/ssl-cer-flow.png)

#### Signed on Trusted Third Party CA (eg. Google CA)
![cer-with-gg](/images/authentication/digital-signature-and-digital-certificate/cer-with-gg.png)

#### Self-Signed Certificate
![self-sign-cer](/images/authentication/digital-signature-and-digital-certificate/self-sign-cer.png)


## More Read
* [SSL/TLS handshake protocol](/2021/03/08/authentication/ssl-tls-protocol)
* [SSL, TLS, HTTP, HTTPS Explained](/2021/03/08/authentication/http-https-ssl-tls)

## Ref
* [Why digital certificate?](https://www.youtube.com/watch?v=UbMlPIgzTxc)
* [How SSL certificate works?](https://www.youtube.com/watch?v=33VYnE7Bzpk)
* [How does HTTPS work? What's a CA? What's a self-signed Certificate?](https://www.youtube.com/watch?v=T4Df5_cojAs)
