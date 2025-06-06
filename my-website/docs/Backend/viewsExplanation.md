---
sidebar_position: 6
---

# Views Explanation

## Introduction 

**Overview**

This documentation provides an **overview** of the views for managing various resources (professors, subjects, classrooms, courses, and groups) in an educational system using Django and Django REST Framework (DRF). 

These views include functionality to list, create, update, and delete objects, with permissions and filtering applied to ensure secure and efficient data handling.

❗❗Note: All Views is protected by ```@permission_classes([IsAuthenticated])```, requerid a jwt auth. 

## Overview (Views)

The views in this implementation are structured into both Function-Based Views (FBVs) and Class-Based Views (CBVs). 

The goal is to allow users to interact with models such as **Cadastro**, **Disciplinas**, **Ambiente**, **Curso**, and **Turma** using ````RESTful APIs````, while ensuring proper authentication and permission handling.

# Key Features:

- **CRUD Operations**: Create, Retrieve, Update, and Delete operations on resources.

- **Authentication**: All views require authentication via the IsAuthenticated permission class.

- **Search and Filtering**: Some views implement filtering and searching capabilities for better resource management.

## Import Libraries and Explanation 

The libraries that were used for the development of the project were

**django**: The Django web framework, required for the project and its shortcuts (e.g., render).

**djangorestframework**: The Django REST Framework package, which provides tools for building APIs (e.g., Response, generic views, serializers).

**django-filter**: Adds support for DjangoFilterBackend, enabling advanced filtering in DRF APIs.

To install, use ```pip install django djangorestframework django-filter```

## Functions Based on Views

# Professor Views 

**List All professor**

This is View to render a list of all professor in **Database**.

- **Method:** ```GET```, ```POST```

*GET returns all the professors.*

*POST allows creating a new professor when provided with the necessary data.*

**Status code**

```201 CREATED``` if post professor successful.

```400 BAD REQUEST``` if post failed. 
 
 `````python
 
    @api_view(['GET', 'POST'])
    @permission_classes([IsAuthenticated])
    def listar_professores(request):
        if request.method == 'GET':
            queryset = Cadastro.objects.all()
            serializer = CadastroSerializer(queryset, many=True)
            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = CadastroSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 `````

**Search professor** 

This view allows users to search for professors by their **name** in the database.

**Method**: `GET`

**GET** allows searching for professors based on the name parameter. If no parameter is provided, it returns all the professors.

# Status Code:

- `200 OK` – Successfully returns a list of professors based on the search term or all professors if no search term is provided.

# Code Explanation:

```python
    @api_view(['GET', 'POST'])
    @permission_classes([IsAuthenticated])
    def buscar_nome_professor(request):
        termo = request.GET.get('nome', '')  # Retrieves the 'nome' parameter from the request query.
        if termo:  # If a search term is provided
            professores = Cadastro.objects.filter(nome__icontains=termo)  # Filter professors where 'nome' contains the search term.
        else:  # If no search term is provided, return all professors
            professores = Cadastro.objects.all()
        
        serializer = CadastroSerializer(professores, many=True)  # Serializes the queryset of professors.
        return Response(serializer.data, status=status.HTTP_200_OK)  # Returns the serialized data with a 200 OK status.
```

# Class-Based Views 

## Professor CBV

**List and Create Professor** 
This view handles listing and creating professors using a class-based approach.

**Method:** ```GET```, ```POST```

````python
    class ProfessoresView(ListCreateAPIView):
        queryset = Cadastro.objects.all()
        serializer_class = CadastroSerializer
        permission_classes = [IsAuthenticated]
````
**List, Update and Delete professor** 

This view allows retrieving, updating, and deleting a specific professor.

**Method:** ```GET```, ```DELETE```, ```PUT```

````python
  class ProfessoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]

````

**Search Professor** 

This views is responsible for search professor by your name. 

**Method:** ```GET```

````python
class ProfessoresSearchView(ListAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nome']
````

## Disciplina CBV 

**List and Create Disciplina** 
This view handles listing and creating disciplinas using a class-based approach.

**Method:** ```GET```, ```POST```

````python
 class DisciplinasView(ListCreateAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
````

**List, Update and Delete Disciplina** 

This view allows retrieving, updating, and deleting a specific disciplina.

**Method:** ```GET```, ```DELETE```, ```PUT```

````python
 class DisciplinaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
````
## Turma CBV 

**List and Create Ambiente** 
This view handles listing and creating ambientes using a class-based approach.

**Method:** ```GET```, ```POST```

````python
class TurmasView(ListCreateAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]
````

**List, Update and Delete Class** 

This view allows retrieving, updating, and deleting a specific class.

**Method:** ```GET```, ```DELETE```, ```PUT```

````python
class TurmaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]
````

## Curso CBV 

**List and Create Curso** 
This view handles listing and creating course using a class-based approach.

**Method:** ```GET```, ```POST```

````python
class CursosView(ListCreateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]
````

**List, Update and Delete Curso**

This view allows retrieving, updating, and deleting a specific course.

**Method:** ```GET```, ```DELETE```, ```PUT```

````python
class CursoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]
````
