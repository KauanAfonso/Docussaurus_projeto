---
sidebar_position: 1
---

# Getting Started

Let's create our django´s envirounuments that will be running the backend`s part belonged to the project.

## `Requirements`

- Python (3.8, 3.9, 3.10, 3.11)  
- Django (3.2, 4.0, 4.1, 4.2)  
- Django REST Framework (3.10, 3.11, 3.12, 3.13, 3.14)  

## Starting your project at `Beggininng` 

To init any project is Essential to create the **VENV**.

To do it , you need runnnig that command:

```bash
python -m venv env
```

Now It is nescessary active the Python's Envirounment, which was created previously, then to running this command:

```bash
.\env\Scripts\activate
```

## Installing `Dependencies`

To installing the **dependencies's project** you should run that command
```bash
pip install django djangorestframework django-filter djangorestframework-simplejwt corsheaders

```

# Saving the dependencies

It is a good practice to save your dependencies in a separate file to ensure that all necessary packages are installed in your environment. This file is typically called `requirements.txt`.

## Using `requirements.txt`

1. **Creating the `requirements.txt`**:  
   When you install packages in your environment, you can generate a `requirements.txt` file by running the following command:

   ```bash
   pip freeze > requirements.txt
   ```

2. **Resinstall yours dependencies**:  
  When you going to need reinstall your dependencies, it will be storaged at `requirements.txt`, then just do that:
   ```bash
   pip install -r requirements.txt
   ```






## Creating a `Django Project`

  1. **Creating the Back's folder**  
  First of all, You should create a folder called back, where will stay the `Backend's Project` and entere there.

   ```bash
   mkdir back
   cd back
   ```

  2. **Creating the Django Project**    
  Next, create your Django project named cadastro using the django-admin command:

  ```bash
  django-admin startproject cadastro
  ```

## Start your server

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
