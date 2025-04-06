from django.db import models

class Cadastro(models.Model):
    ni = models.CharField(max_length=15)
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    cel = models.CharField(max_length=255)
    ocup = models.FloatField()
    

class Disciplinas(models.Model):
    cod = models.CharField(max_length=100)  #Código             #PWBE
    disc = models.CharField(max_length=100) #Disciplina         #Programação Web Back End
    ch = models.IntegerField()              #Carga Horária      #45

PERIODOS = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('I', 'Integral'),
    ]
class Ambiente(models.Model):
    cod = models.CharField(max_length=255)  #Código             #LabA101
    sala = models.CharField(max_length=255) #Sala               #Laboratório de Informáica
    cap = models.IntegerField()             #Capacidade de alunos
    resp = models.CharField(max_length=255) #Responsável pelo Ambiente
    per = models.CharField(choices=PERIODOS, max_length=10, default="M")

class Turma(models.Model):
    cod = models.CharField(max_length=255)      #Código             #13
    turrma = models.CharField(max_length=255)   #Turma              #2DS-TB

TIPOS = [
    ('CAI', 'Aprendizagem'),
    ('CT','Técnico'),
    ('CS','Superior'),
    ('FIC','Formação')
]
class Curso(models.Model):
    cod = models.CharField(max_length=255)      #Código             #TEC
    curso = models.CharField(max_length=255)    #Curso              #Técnico em Desenvolvimento de Sistemas
    tipo = models.CharField(max_length=20, choices=TIPOS, default="CT")
    ha =  models.CharField(max_length=255)      #Hora Aula          #45
    