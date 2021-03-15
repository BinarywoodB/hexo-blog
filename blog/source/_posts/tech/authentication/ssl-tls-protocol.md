---
title: SSL/TLS Handshake Protocol
date: 2021-03-08 17:08:25
tags:
- Network
- Protocol
- SSL
- TLS
- Handshake
- Asymmetric Key Algorithm
- Symmetric Key Algorithm
- Youtube
categories:
- Tech
- Authentication
---


## SSL/TLS Operation Layer

![operation-layer](/images/tech/authentication/ssl-tls-protocol/operation-layer.png)

The SSL/TLS protocol operates on:
* **Application / Presentation / Session** layers of OSI model
* **Application** layer of TCP/IP model

## SSL/TLS Handshake Process
![handshake-all](/images/tech/authentication/ssl-tls-protocol/handshake-all.png)

### Step 1 ClientHello
![step1](/images/tech/authentication/ssl-tls-protocol/step1.png)

### Step 2 ServerHello
![step2](/images/tech/authentication/ssl-tls-protocol/step2.png)

### Step 3 Verify Digital Certificate
![step3](/images/tech/authentication/ssl-tls-protocol/step3.png)
The client will contact the server's CA(certificate authority) and verify the server's [**digital certificate**](/2021/03/08/tech/authentication/digital-signature-and-digital-certificate), thus confirming the authenticity of the web server.
GOAL: Establishing the trust on the web server.

### Step 4 ClientKeyExchange
![step4](/images/tech/authentication/ssl-tls-protocol/step4.png)

### Step 5 Finished(client)
![step5](/images/tech/authentication/ssl-tls-protocol/step5.png)

### Step 6 Finished(server)
![step6](/images/tech/authentication/ssl-tls-protocol/step6.png)

### Step 7 Handshake Done. Exchanged Message
![step7](/images/tech/authentication/ssl-tls-protocol/step7.png)
Once the handshake is done, the server and client can now exchange messages that are symmetrically encrypted with the shared secret key.

## Notes

1. The above process demonstrates how **asymmetric key algorithm** and **symmetric key algorithm** work together.

* **Asymmetric key algorithm (public key & private key)** is used to verify the identity of the owner and its public key so that trust is built.
* Once the connection is established, **Symmetric key algorithm (shared key)** is used to encrypt and decrypt all traffic between them.

2. The green padlock: indicates that the web server's public key really belongs to the web server, not someone else.

3. The `Https` and the green padlock only indicates the communications between client and server are encrypted. It does not says the website is "safe and good".

## More Read
* [Digital Signature & Digital Certificate](/2021/03/08/tech/authentication/digital-signature-and-digital-certificate)
* [SSL, TLS, HTTP, HTTPS Explained](/2021/03/08/tech/authentication/http-https-ssl-tls)

## Ref
* [SSL/TLS handshake Protocol](https://www.youtube.com/watch?v=sEkw8ZcxtFk)
