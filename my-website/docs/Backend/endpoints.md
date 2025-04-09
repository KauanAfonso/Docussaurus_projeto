---
sidebar_position: 4
---

# Endpoints

An endpoint is a URL (address) that allows a client (such as a browser or application) to communicate with a server. 

In the application, the **endpoints** are paths responsible for accessing, updating, registering, and deleting teachers, data, and users.

## BACKEND ENDPOINTS

## Acess all professors. 

**GET**
```curl
http://127.0.0.1:8000/api/prof
````

An endpoint to acess all professors. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```


````json
[
    {
        "id": 1,
        "ni": "1021328",
        "nome": "Lindomar José",
        "email": "lin@lin.com",
        "cel": "23132132123",
        "ocup": 50
    },
    {
        "id": 5,
        "ni": "5857",
        "nome": "Miguel da Silva",
        "email": "skldsk@sakdls.com",
        "cel": "13212",
        "ocup": 1
    },
    {
        ....
    }
]
````


## Acess professor by ID. 
**GET**
```curl
http://127.0.0.1:8000/api/id/1
````

An endpoint to acess specific professors. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

````json
    {
    "id": 1,
    "ni": "1021328",
    "nome": "Lindomar José",
    "email": "lin@lin.com",
    "cel": "23132132123",
    "ocup": 50
}
````




## Update professor. 

```curl
http://127.0.0.1:8000/api/id/1
````

An endpoint to acess and update professor. 

**Authorization** by Bearer Token 


**Example for a ```PUT``` request:**  

**PUT**

````json
{
    "id": 1,
    "ni": "1021328",
    "nome": "Lindomar Batistão",
    "email": "lin@linaa.com",
    "cel": "23132132123",
    "ocup": 50
}
````

**Example for response:** 

**Status**: ```200 OK```

````json
{
    "id": 1,
    "ni": "1021328",
    "nome": "Lindomar Batistão",
    "email": "lin@linaa.com",
    "cel": "23132132123",
    "ocup": 50
}
````

## Create a professor. 
```curl
http://127.0.0.1:8000/api/prof
````

An endpoint to acess and create professor. 

**Authorization** by Bearer Token 

**Example for a ```POST``` request:**  

**POST**

````json
{
  "ni": "12345",
  "nome": "John Doe",
  "email": "johndoe@example.com",
  "cel": "555-1234",
  "ocup": 45.5
}
````

**Example for response:** 

**Status**: ```201 CREATED```

````json
{
    "id": 17,
    "ni": "12345",
    "nome": "John Doe",
    "email": "johndoe@example.com",
    "cel": "555-1234",
    "ocup": 45.5
}
````

//fazer query parameters aqui no search


# Acess all Cursos. 

```curl
http://127.0.0.1:8000/api/cursos
````

An endpoint to acess curso. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
[
    {
        "id": 1,
        "cod": "TEC",
        "curso": "Técnico em Desenvolvimento de Sistemas",
        "tipo": "CT",
        "ha": "45"
    }
]
````

## Acess Course by ID. 


```curl
http://127.0.0.1:8000/api/curso/1
````

An endpoint to acess specific course. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
{
    "id": 1,
    "cod": "TEC",
    "curso": "Técnico em Desenvolvimento de Sistemas",
    "tipo": "CT",
    "ha": "45"
}
````

## Create Course


```curl
http://127.0.0.1:8000/api/cursos
````

An endpoint to create course. 

**Authorization** by Bearer Token 

**Example for a ```POST``` request:**  

**POST**

````json
{
  "ni": "12345",
  "nome": "John Doe",
  "email": "johndoe@example.com",
  "cel": "555-1234",
  "ocup": 45.5
}
````

**Example for response:** 

**Status**: ```201 CREATED```

````json
{
    "id": 1,
    "cod": "TEC",
    "curso": "Técnico em Desenvolvimento de Sistemas",
    "tipo": "CT",
    "ha": "45"
}
````

# Update Course. 

## Here 


## Create Disciplina. 

```curl
http://127.0.0.1:8000/api/disciplinas
````

An endpoint to create ```Disciplina```. 

**Authorization** by Bearer Token 

**Example for a ```POST``` request:**  

**POST**

````json
{
    "cod":"PJT",
    "disc":"Projetos",
    "ch":"45"

}
````

**Example for response:** 

**Status**: ```201 CREATED```

````json
{
    "id": 1,
    "cod": "PJT",
    "disc": "Projetos",
    "ch": 45
}
````


## Acess all Disciplina. 

```curl
http://127.0.0.1:8000/api/disciplinas
````
An endpoint to acess Disciplinas. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
[
    {
        "id": 1,
        "cod": "PJT",
        "disc": "Projetos",
        "ch": 45
    }
]
````

## Acess disciplina by ID. 

```curl
http://127.0.0.1:8000/api/disciplina/1
````

An endpoint to acess specific disciplina. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
{
    "id": 1,
    "cod": "PJT",
    "disc": "Projetos",
    "ch": 45
}
````

## Update disciplina 

```curl
http://127.0.0.1:8000/api/disciplina/1
````

An endpoint to acess and update disciplina. 

**Authorization** by Bearer Token 


**Example for a ```PUT``` request:**  

**PUT**

````json
{
    "cod":"PJT_1",
    "disc":"Projetos Lindomar",
    "ch":"45"
}
````

**Example for response:** 

**Status**: ```200 OK```

````json
{
    "id": 1,
    "cod": "PJT_1",
    "disc": "Projetos Lindomar",
    "ch": 45
}
````

## Acess all class. 


```curl
http://127.0.0.1:8000/api/turmas
````
An endpoint to acess turmas. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
[
    {
        "id": 1,
        "cod": "DS16",
        "turrma": "2DS_MB_16"
    }
]
````

## Acess Turmas by ID. 

```curl
http://127.0.0.1:8000/api/disciplina/1
````

An endpoint to acess specific turma using ID. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
{
    "id": 1,
    "cod": "DS16",
    "turrma": "2DS_MB_16"
}
````
 ## Update Turmas. 

```curl
http://127.0.0.1:8000/api/turma/1
````

An endpoint to acess and update turma. 

**Authorization** by Bearer Token 


**Example for a ```PUT``` request:**  

**PUT**

````json
{
    "cod":"DS16",
    "turrma":"2DS_MB_16&15"
}
````

**Example for response:** 

**Status**: ```200 OK```

````json
{
    "id": 1,
    "cod": "DS16",
    "turrma": "2DS_MB_16&15"
}
````

## Acess all ambientes. 


```curl
http://127.0.0.1:8000/api/ambientes
````
An endpoint to acess ambientes. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
[
    {
        "id": 1,
        "cod": "LabA101",
        "sala": "Laboratorio 12",
        "cap": 25,
        "resp": "Lindomar",
        "per": "T"
    }
]
````

## Acess ambientes by ID. 

```curl
http://127.0.0.1:8000/api/ambiente/1
````
An endpoint to acess ambientes. 

**Authorization** by Bearer Token 

**Example for response:** 

**Status**: ```200 OK```

**GET**

````json
{
    "id": 1,
    "cod": "LabA101",
    "sala": "Laboratorio 12",
    "cap": 25,
    "resp": "Lindomar",
    "per": "T"
}
````

## Update ambientes 

```curl
http://127.0.0.1:8000/api/ambiente/1
````

An endpoint to acess and update ambiente. 

**Authorization** by Bearer Token 


**Example for a ```PUT``` request:**  

**PUT**

````json
{

    "cod":"LabA106",
    "sala":"Laboratorio 16", 
    "cap":"25", 
    "resp":"Lindomar", 
    "per":"M"
}
````

**Example for response:** 

**Status**: ```200 OK```

````json
{
    "id": 1,
    "cod": "LabA106",
    "sala": "Laboratorio 16",
    "cap": 25,
    "resp": "Lindomar",
    "per": "M"
}
````

## Create Ambiente 

```curl
http://127.0.0.1:8000/api/ambientes
````

An endpoint to create ```Ambientes```. 

**Authorization** by Bearer Token 

**Example for a ```POST``` request:**  

**POST**

````json
{

    "cod":"LabA101",
    "sala":"Laboratorio 12", 
    "cap":"25", 
    "resp":"Lindomar", 
    "per":"T"
}
````

**Example for response:** 

**Status**: ```201 CREATED```

````json
{
    "id": 1,
    "cod": "LabA101",
    "sala": "Laboratorio 12",
    "cap": 25,
    "resp": "Lindomar",
    "per": "T"
}
````


>> Now, this is example for Create professor using @Api_View. For more explanation, acess ```View```.

## Create Professor 

```curl
http://127.0.0.1:8000/api/professores
````

An endpoint to create ```Professor```. 

**Authorization** by Bearer Token 

**Example for a ```POST``` request:**  

**POST**

````json
{
  "ni": "67890",
  "nome": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "cel": "555-9876",
  "ocup": 30.0
}

````

**Example for response:** 

**Status**: ```201 CREATED```

````json
{
    "id": 18,
    "ni": "67890",
    "nome": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "cel": "555-9876",
    "ocup": 30
}
````
