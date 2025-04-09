---
sidebar_position: 1
---

# Getting Started

Let's create our django´s envirounuments that will be running the backend`s part belonged to the project. Follow each step by stpe
carefully to ensure the project's sucess

## `Requirements`

- Python (3.8, 3.9, 3.10, 3.11)  
- Django (3.2, 4.0, 4.1, 4.2)  
- Django REST Framework (3.10, 3.11, 3.12, 3.13, 3.14)  

## Starting your project at `Beggininng` 

To init any project is essential to create the **VENV**.
It is an enivoument virtual for python, and with It, alowing you installing dependencies inside it and not in your
local computers system.

To do it , you need runnnig that command on terminal or cmd:

```bash
python -m venv env
```

Now It is nescessary active the Python's Envirounment, which was created previously, then to running this command:

```bash
.\env\Scripts\activate
```

## Installing `Dependencies`

To installing the **dependencies's project** you must run that command
```bash
pip install django djangorestframework django-filter djangorestframework-simplejwt corsheaders

```
  1. **django**: It is the base of Django Framework, a powerfull framework to WEB development.[Click here](https://www.djangoproject.com/) to learn more.
  2. **djangorestframework**: DRF (Django Rest Framework) is a powerful toolkit built on top of Django, designed for development RESTful APIs.
  [Click here](https://www.django-rest-framework.org/) to know more.
  3. **django-filter**: The django-filter is used to filtring the data. [Click here](https://django-filter.readthedocs.io/en/stable/guide/usage.html) to learn more.
  4. **djangorestframework-simplejwt**: This package provides simple JWT (JSON Web Token) authentication for your Django REST Framework APIs. [Click here](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) to learn more.
  5. **corsheaders**: CORS Headers allows your Django project to handle Cross-Origin Resource Sharing (CORS) and manage requests from different origins. [Click here](https://pypi.org/project/django-cors-headers/) to learn more.


# Saving the dependencies

It is a good practice to save your dependencies in a separate file to ensure that all necessary packages are installed in your environment. This file is typically called `requirements.txt`.

## Using `requirements.txt`

1. **Creating the `requirements.txt`**:  

   When working with Python projects, it's common practice to manage the project's dependencies using a `requirements.txt` file. This file contains a list of all the external packages your project depends on, ensuring that anyone working on the project can easily install all the required dependencies.

   To create that, makes it:

   ```bash
   pip freeze > requirements.txt
   ```

2. **Resinstall yours dependencies**:  
  When you going to need reinstall your dependencies, it will be storaged at `requirements.txt`, then you will just need running that:

   ```bash
   pip install -r requirements.txt
   ```


## Creating a `Django Project`

  1. **Creating the Back's folder**  
  First of all, You must create a folder called back, where will stay the `Backend's Project` and get in there, to makes anothers specifics settings.

   ```bash
   mkdir back
   cd back
   ```

  2. **Creating the Django Project**    
  Now you must create your Django project named cadastro, It is struct of Django framework to managment settings about the application and the geral of project. Using the django-admin command:

  ```bash
  django-admin startproject cadastro
  ```

## Creating a `Django App`

  1. **Creating the app**  
  Now create an app is required to the applications, you can to that with this command:

   ```bash
   django-admin startapp api

   ```


## Adding the dependencies in the`settings.py` File

To configure your project properly, you'll need to add the necessary dependencies in the *settings.py* file of your Django project. This includes the apps for both the Django framework and any additional ones you may have created, such as the API app.

  1. **Put your app here (api)**
  2. **Put your dependencies here**

```jsx title="back/cadastro/settings.py"
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'api',  # Your custom API app
    'rest_framework_simplejwt',  # For JWT authentication
    'corsheaders',  # For handling CORS (Cross-Origin Resource Sharing)
    'django_filters',  # For filtering data in Django REST framework
]

````


## Adding the `Token JWT` in the settings.py File

Your django project must be configuered 
to add the libary of [rest_framework_simplejwt](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html).
you should adding these code's lines to import it and for a a good working.

```jsx title="back/cadastro/settings.py"
# Django REST Framework settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',  # Use JWT for authentication
    )
}

# Simple JWT configuration
SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": ("Bearer",),  # Specify the type of header for token authorization
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),  # Set access token expiration time (60 minutes)
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),  # Set refresh token expiration time (1 day)
}

````


