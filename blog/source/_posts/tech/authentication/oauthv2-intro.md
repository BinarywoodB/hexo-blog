---
title: OAuth 2.0 Introduction
date: 2021-03-10 19:44:42
tags:
- Network
- Authentication
- Authorization
- OAuth 2.0
- Protocol
- Azure Activity Directory (AAD)
categories:
- Tech
- Authentication
---

## Introduction

OAuth 2 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, and DigitalOcean. It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user account. OAuth 2 provides authorization flows for web and desktop applications, and mobile devices.

## OAuth Roles

* Resource Owner (user)

    The resource owner is the user who authorizes an application to access their account. The application’s access to the user’s account is limited to the "scope" of the authorization granted (e.g. read or write access).

* Client (application)

    The client is the application that wants to access the user's account. Before it may do so, it must be authorized by the user, and the authorization must be validated by the API.

* Resource Server

    The resource server hosts the protected resource user would like to access. The resource server validates the access token, and if valid, serves the request.

* Authorization Server

    The authorization server verifies the identity of the user and then issues access tokens to the application.

### Abstract Protocol Flow

![abstract_flow](/images/tech/authentication/oauthv2-intro/abstract_flow.png)

Detailed explanation of the steps in the diagram:
1. The *application* requests authorization to access service resources from the *user*.
2. If the *user* authorized the request, the *application* receives an authorization grant.
3. The *application* requests an access token from the *authorization server (API)* by presenting authentication of its own identity, the authorization grant.
4. If the application identity is authenticated and the authorization grant is valid, the *authorization server (API)* issues an access token to the application. **Authorization is complete**.
5. The *application* requests the resource from the *resource server (API)* and presents the access token for **authentication**.
6. If the access token is valid, the *resource server (API)* serves the resource to the *application*.


## Example

![oauthv2-microsoft-identity](/images/tech/authentication/oauthv2-intro/oauthv2-microsoft-identity.png)

Take an example, we develop an app and hopes user can view his profile from the app, where user's profile info is stored in Microsoft Graph Service. In this scenario, roles are as below:

* Resource Onwer: user
* Client: the application
* Resource Server: The Microsoft Graph Server
* Authorization Server (the identity provider): Azure Activity Directory (AAD)

To realize the OAuth flow, we register an app registration on AAD for our application. When user want to get his profile when using the app:
1. Our app ask user for authorization grant
2. User consent the scope the app ask for the graph server.
3. With the authorization grant, the app can ask AAD for access token to get profile from the Graph Server.
4. The AAD server validate the authorization grant and give the access token to the app.
5. With the access token, the app is able to turn to the Graph Server to get user's profile.


## Authentication VS Authorization

* Authentication 验证
    
    Authentication is the process of proving that you are who you say you are.
    
    The Microsoft identity platform uses the [OpenID Connect](https://openid.net/connect/) protocol for handling authentication.

* Authorization 授权

    Authorization is the act of granting an authenticated party permission to do something. It specifies what data you're allowed to access and what you can do with that data. 
    
    The Microsoft identity platform uses the [OAuth 2.0](https://oauth.net/2/) protocol for handling authorization.

## Authorization Grant Types

1. **Authorization Code**: used with server-side Applications
1. **Implicit**: used with Mobile Apps or Web Applications (applications that run on the user’s device)
1. **Resource Owner Password Credentials**: used with trusted Applications, such as those owned by the service itself
1. **Client Credentials**: used with Applications API access

### Authorization Code

The authorization code grant type is the most commonly used because it is optimized for *server-side applications*, where source code is not publicly exposed, and Client Secret confidentiality can be maintained. This is a redirection-based flow, which means that the application must be capable of interacting with the *user-agent* (i.e. the user’s web browser) and receiving API authorization codes that are routed through the user-agent.

授权码（authorization code）方式，指的是第三方应用先申请一个授权码，然后再用该码获取令牌。

这种方式是最常用的流程，安全性也最高，它适用于那些有后端的 Web 应用。授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。

![auth_code_flow](/images/tech/authentication/oauthv2-intro/auth_code_flow.png)

### Implicit
### Resource Owner Password Credentials
### Client Credentials


## More Read
* [Microsoft Identity Platform: OAuth 2.0](/2021/03/11/authentication/microsoft-identity-platform)


## Ref
* [An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
* [阮一峰的网络日志：理解OAuth 2.0](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
* [OAuth 2.0 and OpenID Connect protocols on the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols)
* [阮一峰的网络日志：OAuth 2.0 的四种方式](https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)