---
sidebar_position: 1
---

# Models

### What are the Models?

Models in Django are used to define the structure of your database. They allow you to define the fields and behaviors of the data you want to store in your database. Each model is represented as a Python class that subclasses django.db.models.Model. Django automatically translates the model into a corresponding database table.

To larning more about `models` clicking [here](https://docs.djangoproject.com/en/5.2/topics/db/models/)


## Importing the Models

At `api/models.py` If does not came with the library call , insert this to be allowed working with models:

```jsx title="back/api/models.py"
from django.db import models  
```

By adding this import statement, you gain access to Django's model system, which allows you to define database tables, fields, and relationships between them. With django.db.models, you can create and manage the structure of your database directly through Python code, making it easier to work with and interact with your data.


## Cadastro Model

The `Cadastro model` is responsible for storing all the information related to teachers. This includes important details such as the teacher's identification number, full name, email address, cellphone number, and occupation.

```jsx title="back/api/models.py"
class Cadastro(models.Model):
    ni = models.CharField(max_length=15)
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    cel = models.CharField(max_length=255)
    ocup = models.FloatField() #nivel de cocupação
```

## Disciplinas Model

The `Disciplinas model` is responsible for storing all the information related to subjects. This includes important details such as the Disciplinas's code number, name, and total worload.

```jsx title="back/api/models.py"
class Disciplinas(models.Model):
    cod = models.CharField(max_length=100)  #Código             #PWBE
    disc = models.CharField(max_length=100) #Disciplina         #Programação Web Back End
    ch = models.IntegerField()              #Carga Horária      #45
```



## Ambiente Model

The `Ambiente model` is responsible for storing all the information related to the environment. This includes important details such as the environment's code, classroom name, student capacity, the person responsible for the environment, and the period during which it is available.

```jsx title="back/api/models.py"

class Ambiente(models.Model):
    
    #Choice to per
    PERIODOS = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('I', 'Integral'),
    ]

    cod = models.CharField(max_length=255)  #Código             #LabA101
    sala = models.CharField(max_length=255) #Sala               #Laboratório de Informáica
    cap = models.IntegerField()             #Capacidade de alunos
    resp = models.CharField(max_length=255) #Responsável pelo Ambiente
    per = models.CharField(choices=PERIODOS, max_length=10, default="M") #periodo

```