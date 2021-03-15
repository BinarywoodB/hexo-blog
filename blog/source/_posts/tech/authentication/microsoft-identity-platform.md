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
- Azure Activity Directory (AAD)
categories:
- Tech
- Authentication
---

## Microsoft Identity Platform

### The Basics

![oauthv2-microsoft-identity](/images/tech/authentication/oauthv2-intro/oauthv2-microsoft-identity.png)

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

> // TOASK: How can **bearer token** ensure security in HTTP request? Can eavesdroppers get the header token?

* **Access tokens** - tokens that a resource server receives from a client, containing permissions the client has been granted.
* **ID tokens** - tokens that a client receives from the authorization server, used to sign in a user and get basic information about them.
* **Refresh tokens** - used by a client to get new access and ID tokens over time. These are opaque strings, and are only understandable by the authorization server.

## Authorization Grant Types

### Authorization Code Flow

![microsoft-identity-auth-code-flow](/images/tech/authentication/microsoft-identity-platform/microsoft-identity-auth-code-flow.png)


> // TOASK: How does Web API validate token??

1. Request an authorization code.
    
    ```HTTP
    // Line breaks for legibility only

    https://login.microsoftonline.com/{tenant}/oauth2/v2.0/authorize?
    client_id=6731de76-14a6-49ae-97bc-6eba6914391e
    &response_type=code
    &redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
    &response_mode=query
    &scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read%20api%3A%2F%2F
    &state=12345
    &code_challenge=YTFjNjI1OWYzMzA3MTI4ZDY2Njg5M2RkNmVjNDE5YmEyZGRhOGYyM2IzNjdmZWFhMTQ1ODg3NDcxY2Nl
    &code_challenge_method=S256
    ```

1. Request an access token

    ```HTTP
    // Line breaks for legibility only

    POST /{tenant}/oauth2/v2.0/token HTTP/1.1
    Host: https://login.microsoftonline.com
    Content-Type: application/x-www-form-urlencoded

    client_id=6731de76-14a6-49ae-97bc-6eba6914391e
    &scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read
    &code=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq3n8b2JRLk4OxVXr...
    &redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
    &grant_type=authorization_code
    &code_verifier=ThisIsntRandomButItNeedsToBe43CharactersLong 
    &client_secret=JqQX2PNo9bpM0uEihUPzyrh    // NOTE: Only required for web apps. This secret needs to be URL-Encoded.
    ```
1. Refresh the access token

    ```HTTP
    // Line breaks for legibility only

    POST /{tenant}/oauth2/v2.0/token HTTP/1.1
    Host: https://login.microsoftonline.com
    Content-Type: application/x-www-form-urlencoded

    client_id=6731de76-14a6-49ae-97bc-6eba6914391e
    &scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read
    &refresh_token=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq...
    &grant_type=refresh_token
    &client_secret=JqQX2PNo9bpM0uEihUPzyrh      // NOTE: Only required for web apps. This secret needs to be URL-Encoded
    ```


### Authorization Code Flow (with PKCE) for SPA

![microsoft-identity-auth-code-flow-with-pkce](/images/tech/authentication/microsoft-identity-platform/microsoft-identity-auth-code-flow-with-pkce.png)

> // TOASK: Is it secure to use auth code in SPA when using PKCE?


### Implicit
### Resource Owner Password Credentials
### Client Credentials


## Example

In our implementation, Tab app uses **authorization code flow with PKCE**.
1. Tab App *frontend* gets auth code.
    1) Frontend browser pop up login page (/public/auth-start.html).
    2) User login and consent, frontend page redirect user to redirect_uri (/public/auth-end.html).
    3) End page parse authorization code and return to tab app.
1. Tab App sends the auth code to *backend* **auth server** to get access token.

## More Read

* [OAuth 2.0 Introduction](/2021/03/10/authentication/oauthv2-intro)


## Ref

* [OAuth 2.0 and OpenID Connect protocols on the Microsoft identity platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols)
* [Scenario: Single-page application](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-overview)
* [Single page apps using the authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-third-party-cookies-spas)
* [Microsoft identity platform and OAuth 2.0 authorization code flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)