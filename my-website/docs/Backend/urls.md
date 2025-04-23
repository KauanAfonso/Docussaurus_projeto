---
sidebar_position: 3
---
# Urls
## Introduction

URLs in the **Django REST Framework** define paths to API resources. They are associated with **Views**, which process requests and return appropriate responses. **DRF** makes it easy to map URLs **using routers**, which automatically configure endpoints for resources.

![Texto alternativo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aICd8xBA8v3p2SGJPxa8xr5lEqHQCTv3dQ&s)


## Http Methods 

The API performs all Http methods, being able to perform a complete Crud. The methods are:


**Create (POST)**

Use POST to create new resources. This method allows you to send data to the server, where it will be processed and stored. It's the first step to adding new information to the system.


**Read (GET)**

Use GET to retrieve information. This method allows you to fetch data from the server without making any changes. It’s the most common way to view resources.

**Update (PUT)**

Use PUT to update existing resources. This method replaces the entire resource with the new data you provide, making it ideal for completely modifying an entity.

**Delete (DELETE)**

Use DELETE to remove a resource from the server. This method permanently deletes the specified resource, ensuring it no longer exists in the system.


## Urls Explanations 

Before explaining urls, let's understand libraries

```python

from django.urls import path

```

Is a Library for URLs applications. Django uses the concept of URLs to **map access paths** to different resources or views in web application.



```python

from .views import *

```

The line **from .views import** is used in Django (and Python in general) to ```import all functions, classes, or variables``` from a module called views that exists in the same directory as the current script.


```python
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
```

This code imports two views from the rest_framework_simplejwt library, popular library for working with JSON Web Tokens (JWT) in Django, especially in conjunction with the **Django Rest Framework (DRF)**. To understand what JWT is, [click here](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/).


**TokenObtainPairView**: This view is responsible for generating a pair of tokens when the user submits their credentials (usually username and password).

**TokenRefreshView**: This view is responsible for renewing the access token using the refresh token provided by the user.

## Urls for Tokens

```python
path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
```

These two URL patterns are used to associate specific URL paths with views.

> In Django, path is used to map URLs to specific views.

**token_obtain_pair** is a name of TokenObtainPairView.as_view(). 

    ```TokenObtainPairView.as_view()```: Is responsible to verify credentials and if validy, generate twice tokens (acess and refresh). 

    ```token/```: This is the URL path used to obtain tokens. 

    
The ```as_view()```  method turns the ```TokenObtainPairView``` class into a view function that can be processed by Django to handle **HTTP requests**.

    ```name='token_obtain_pair'``` Is a name of Token in code. 

```token_refresh``` is a name of TokenRefreshView.as_view().

```TokenRefreshView.as_view()```: Is responsible for verifying the validity of the refresh token, and if valid, generates a new access token, allowing the user to remain authenticated without needing to log in again.

**refresh/**: This is the URL path used to refresh the access token.

```The as_view()``` method turns the TokenRefreshView class into a view function that can be processed by Django to handle HTTP requests.
