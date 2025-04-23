---
sidebar_position: 7
---

# Jwt 

JWT ```(JSON Web Token)``` is a form of authentication that allows a server to verify a user's identity without having to store information about them.

## What's is JWT? 

JWT stands for JSON Web Token and is an ```RFC-7519``` technique that is standard with the function of authentication between two parties, through a signed token. It securely transmits and stores JSON objects between different applications.


## Basic Structure 

````json
    {
    "access": "eyJ0eXAiOiJKV1QiLCJh...",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhb..."
    }
````

- The user logs in → receives an Access Token and a Refresh Token.

- The Access Token is used to authenticate to the protected routes.

When the Access Token expires, you use the Refresh Token to generate a new one.

````json
    {
    "access": "novo_token_jwt"
    }
````

## Fonts 

- [TOTVS — JWT Token: o que é e como funciona](https://www.totvs.com/blog/gestao-para-assinatura-de-documentos/jwt-token/)
- [Alura — O que é JSON Web Token (JWT)?](https://www.alura.com.br/artigos/o-que-e-json-web-tokens)
- [RFC 7519 — JSON Web Token (JWT)](https://www.rfc-editor.org/rfc/rfc7519)
