---
sidebar_position: 3
---

# Urls

URLs in the **Django REST Framework** define paths to API resources. They are associated with **Views**, which process requests and return appropriate responses. **DRF** makes it easy to map URLs **using routers**, which automatically configure endpoints for resources.


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



Congratulations, you have made your first p

Feel free to play around and edit this post as much as you like.
```

A new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings).
