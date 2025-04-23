---
sidebar_position: 1
---

# Models

### What are the Models?

Models in Django are used to define the structure of your database. They allow you to define the fields and behaviors of the data you want to store in your database. Each model is represented as a Python class that subclasses django.db.models.Model. Django automatically translates the model into a corresponding database table.

To larning more about `models` clicking [here](https://docs.djangoproject.com/en/5.2/topics/db/models/)



# Project Database
![MER do banco de dados](/img/banco_de_dados.png)
This is the logical data model (Entity-Relationship Diagram) of the project's database. It illustrates the structure of the database, including the main entities and their attributes. This database has no has relationship with its tables.


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

## Turma Model

The `Turma model` is responsible for storing all the information related to the class. This includes important details such as the class's code and the group name.

```jsx title="back/api/models.py"
class Turma(models.Model):
    cod = models.CharField(max_length=255)      #Código             #13
    turma = models.CharField(max_length=255)    #Turma              #2DS-TB

```

## Curso Model

The `Curso model` is designed to store all the essential information related to a course. It includes important attributes such as the course code, name, type, and the total number of class hours. These fields help in managing the different courses offered in the system, each identified by a unique code and a well-defined structure.

```jsx title="back/api/models.py"
class Curso(models.Model):

    TIPOS = [
    ('CAI', 'Aprendizagem'),
    ('CT','Técnico'),
    ('CS','Superior'),
    ('FIC','Formação')
    ]

    cod = models.CharField(max_length=255)      #Código             #TEC
    curso = models.CharField(max_length=255)    #Curso              #Técnico em Desenvolvimento de Sistemas
    tipo = models.CharField(max_length=20, choices=TIPOS, default="CT")
    ha =  models.CharField(max_length=255)      #Hora Aula          #45

```
