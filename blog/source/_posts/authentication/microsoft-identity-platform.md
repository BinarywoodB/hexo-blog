---
title: 'Microsoft Identity Platform: OAuth 2.0'
date: 2021-03-11 00:39:42
tags:
- Network
- Protocol
- Authentication
- Authorization
- OAuth 2.0
- Microsoft Identity Platform
- MSAL
categories:
- Authentication
---

## Microsoft Identity Platform

### The Basics

![oauthv2-microsoft-identity](/images/authentication/oauthv2-intro/oauthv2-microsoft-identity.png)

* The **Authorization Server** is the Microsoft identity platform and is responsible for ensuring the user's identity, granting and revoking access to resources, and issuing tokens. The authorization server is also known as the identity provider - it securely handles anything to do with the user's information, their access, and the trust relationships between parties in a flow.
* The **Resource Owner** is typically the end user. It's the party that owns the data and has the power to allow clients to access that data or resource.
* The **OAuth Client** is your app, identified by its application ID. The OAuth client is usually the party that the end user interacts with, and it requests tokens from the authorization server. The client must be granted permission to access the resource by the resource owner.
* The **Resource Server** is where the resource or data resides. It trusts the Authorization Server to securely authenticate and authorize the OAuth Client, and uses Bearer access tokens to ensure that access to a resource can be granted.

### App Registration

* An **Application ID** that uniquely identifies your app
* A **Redirect URI** (optional) that can be used to direct responses back to your app
* A few other scenario-specific values.

### Endpoints

Once registered, the app communicates with the Microsoft identity platform by sending requests to the endpoint:
```
https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize
https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token
```

### Tokens

// TOASK: How can **bearer token** ensure security in HTTP request? Can eavesdroppers get the header token?

* **Access tokens** - tokens that a resource server receives from a client, containing permissions the client has been granted.
* **ID tokens** - tokens that a client receives from the authorization server, used to sign in a user and get basic information about them.
* **Refresh tokens** - used by a client to get new access and ID tokens over time. These are opaque strings, and are only understandable by the authorization server.

## Authorization Code Flow

![microsoft-identity-auth-code-flow](/images/authentication/oauthv2-intro/microsoft-identity-auth-code-flow.png)

## Ref

* [OAuth 2.0 and OpenID Connect protocols on the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols)