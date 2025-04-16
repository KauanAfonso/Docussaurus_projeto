---
sidebar_position: 2
---

# Serializers

### What is the serializers?

Serializers are responsible for converting complex data types—such as querysets and model instances—into native Python data types that can then be easily rendered into JSON, XML, or other content types. They also handle the reverse process, converting incoming JSON (or other formats) back into usable Python objects.

This allow data to be:

  1. Transmitted over the network (e.g., via an API)
  2. Stored in files (like JSON files)
  3. Saved into a database in a structured form

## Importing the library and Models

To the serializers working as the expected, you must create a file inside your api directory as `"serializer.py"` 
and add the library and models from your project inside it.

```jsx title="back/api/serializer.py"
from rest_framework import serializers
from .models import *

````

## Serializing your Models

To serialize your models, you will create a subclass that inherits all the functionality of serializers.ModelSerializer from the library imported earlier.

```jsx title="back/api/serializer.py"

class CadastroSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Cadastro
        fields = '__all__'

````


That code are doing it:

  1. `class CadastroSerializer(serializers.ModelSerializer)`: Is making a subclass of ModelSerializer.
  2. `class Meta:` : The class Meta is responsible to configure options specific within CadastroSerializer.
  3. `model = Cadastro`: Define which model will be used by the serializer.
  3. `fields = '__all__'`: Specifies which fields will be serialized.

You can learning more about `serializers` clicking [aqui](https://www.django-rest-framework.org/api-guide/serializers/).



## Serializing all Models

Now, you can serialize all your models using the same process for each one. This approach allows you to maintain consistency across your application while simplifying the serialization of multiple models.  

Is probably that It will be as that:

```jsx title="back/api/serializer.py"

from rest_framework import serializers
from .models import *

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = '__all__'

class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplinas
        fields = '__all__'

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'


````




