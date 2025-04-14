---
sidebar_position: 4
---

# Endpoints

Think of **endpoints** as specific web addresses (URLs) that act like digital doorways. When a client (like a web browser or a mobile app) wants to communicate with our server, it sends requests to these doorways to perform actions like:

* **Accessing** information 🧐
* **Updating** existing data ✍️
* **Registering** new entries 📝
* **Deleting** records 🗑️

In our application, these carefully crafted endpoints are the key to managing all our valuable data: from the dedicated teachers who shape minds, to the essential course details, and the very users who interact with our system.


## 🌐 Backend Endpoints ✨

Let's explore the specific endpoints that our backend provides to interact with different parts of our application. Remember, **Authorization** via a **Bearer Token** is required to access these secure pathways! 🔒

## Professor Endpoints. 

**Acess all professors.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/prof```
    * **Purpose:** This endpoint allows you to retrieve a comprehensive list of all the professors currently registered in our system.
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
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
            "....": "..."
          }
        ]
        ```

**Acess professor by ```id```.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/id/1```
    * **Purpose:** This endpoint allows you to retrieve a comprehensive list of professor filtered by id. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
    ```json
        {
            "id": 1,
            "ni": "1021328",
            "nome": "Lindomar José",
            "email": "lin@lin.com",
            "cel": "23132132123",
            "ocup": 50
        }
    ```

**Update professor by.** 

 * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/id/1```
    * **Purpose:** An endpoint to acess and update professor.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
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
    * **Example Response (HTTP Status: `200 OK`):**
    ```json
        {
            "id": 1,
            "ni": "1021328",
            "nome": "Lindomar José",
            "email": "lin@lin.com",
            "cel": "23132132123",
            "ocup": 50
        }
    ```

**Create professor.** 

 * **HTTP Method:** `POST`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/prof```
    * **Purpose:** An endpoint to acess and create professor. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
        {
            "ni": "12345",
            "nome": "John Doe",
            "email": "johndoe@example.com",
            "cel": "555-1234",
            "ocup": 45.5
        }
    ````
    * **Example Response (HTTP Status: `201 CREATED`):**
    ```json
        {
            "id": 17,
            "ni": "12345",
            "nome": "John Doe",
            "email": "johndoe@example.com",
            "cel": "555-1234",
            "ocup": 45.5
        }
    ```



## Cursos Endpoint. 

**Acess all courses.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/cursos```
    * **Purpose:** This endpoint allows you to retrieve a comprehensive list of all the cursos currently registered in our system.
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        [
        {
            "id": 1,
            "cod": "TEC",
            "curso": "Técnico em Desenvolvimento de Sistemas",
            "tipo": "CT",
            "ha": "45"
        }
        ]
        ```

**Acess course by ```id```.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/curso/1```
    * **Purpose:** This endpoint allows you to retrieve a comprehensive list of all the cursos currently registered in our system.
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
            "id": 1,
            "cod": "TEC",
            "curso": "Técnico em Desenvolvimento de Sistemas",
            "tipo": "CT",
            "ha": "45"
        }
        ```

**Update course (Fzer dps).** 

 * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/id/1```
    * **Purpose:** An endpoint to acess and update professor.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
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
    * **Example Response (HTTP Status: `200 OK`):**
    ```json
        {
            "id": 1,
            "ni": "1021328",
            "nome": "Lindomar José",
            "email": "lin@lin.com",
            "cel": "23132132123",
            "ocup": 50
        }
    ```

**Create course.** 

 * **HTTP Method:** `POST`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/cursos```
    * **Purpose:** An endpoint to create course. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
       {
            "ni": "12345",
            "nome": "John Doe",
            "email": "johndoe@example.com",
            "cel": "555-1234",
            "ocup": 45.5
        }
    ````
    * **Example Response (HTTP Status: `201 CREATED`):**
    ```json
       {
            "id": 1,
            "cod": "TEC",
            "curso": "Técnico em Desenvolvimento de Sistemas",
            "tipo": "CT",
            "ha": "45"
        }
    ```

**Fazer delete dps**

## Endpoint for disciplinas 

**Acess all Disciplinas.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/disciplinas```
    * **Purpose:** An endpoint to acess all Disciplinas. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        [
        {
            "id": 1,
            "cod": "PJT",
            "disc": "Projetos",
            "ch": 45
        }
        ]
        ```
**Acess disciplina by ```id```.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/disciplina/1```
    * **Purpose:** TAn endpoint to acess Disciplinas. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
            "id": 1,
            "cod": "PJT",
            "disc": "Projetos",
            "ch": 45
        }
        ```

**Update disciplina.** 

 * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/disciplina/1```
    * **Purpose:** An endpoint to acess and update disciplina.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
        {
            "cod":"PJT_1",
            "disc":"Projetos Lindomar",
            "ch":"45"
        }
    ````
    * **Example Response (HTTP Status: `200 OK`):**
    ```json
       {
            "id": 1,
            "cod": "PJT_1",
            "disc": "Projetos Lindomar",
            "ch": 45
        }
    ```
**Create course.** 

 * **HTTP Method:** `POST`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/disciplinas```
    * **Purpose:** An endpoint to create ```Disciplina```.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
       {
            "cod":"PJT",
            "disc":"Projetos",
            "ch":"45"
        }
    ````
    * **Example Response (HTTP Status: `201 CREATED`):**
    ```json
       {
            "id": 1,
            "cod": "PJT",
            "disc": "Projetos",
            "ch": 45
        }
    ```

## Endpoint for class

**Acess all Disciplinas.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/turmas```
    * **Purpose:** An endpoint to acess turmas. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        [
            {
                "id": 1,
                "cod": "DS16",
                "turrma": "2DS_MB_16"
            }
        ]
        ```
**Acess turma by ```id```.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/turma/1```
    * **Purpose:** An endpoint to acess specific turma using ID.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
            "id": 1,
            "cod": "DS16",
            "turrma": "2DS_MB_16"
        }
        ```
**Update turma.** 

 * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/turma/1```
    * **Purpose:** An endpoint to acess and update turma.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
        {
            "cod":"DS16",
            "turrma":"2DS_MB_16&15"
        }
    ````
    * **Example Response (HTTP Status: `200 OK`):**
    ```json
        {
            "id": 1,
            "cod": "DS16",
            "turrma": "2DS_MB_16&15"
        }
    ```
## Endpoint for ambientes 

**Acess all ambientes.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/ambientes```
    * **Purpose:** An endpoint to acess ambientes. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
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
        ```

**Acess ambientes by ``id``.** 

 * **HTTP Method:** `GET`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/ambiente/1```
    * **Purpose:** An endpoint to acess ambientes by id. 
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
      ````json
                {
                    "id": 1,
                    "cod": "LabA101",
                    "sala": "Laboratorio 12",
                    "cap": 25,
                    "resp": "Lindomar",
                    "per": "T"
                }
        ```
**Update ambientes.** 
 * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/ambiente/1```
    * **Purpose:** An endpoint to acess and update ambiente.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
        {
            "cod":"LabA106",
            "sala":"Laboratorio 16", 
            "cap":"25", 
            "resp":"Lindomar", 
            "per":"M"
        }
    ````
    * **Example Response (HTTP Status: `200 OK`):**
    ```json
        {
           "id": 1,
            "cod": "LabA106",
            "sala": "Laboratorio 16",
            "cap": 25,
            "resp": "Lindomar",
            "per": "M"
        }
    ```
**Create ambiente.** 

 * **HTTP Method:** `POST`
    * **Endpoint URL:** ```http://127.0.0.1:8000/api/ambientes```
    * **Purpose:** An endpoint to create ```Ambientes```.  
    * **Authorization:** Requires a valid Bearer Token in the request headers.
    * **Example for a request:**
    ````json
        {
            "cod":"LabA101",
            "sala":"Laboratorio 12", 
            "cap":"25", 
            "resp":"Lindomar", 
            "per":"T"
        }
    ````
    * **Example Response (HTTP Status: `201 CREATED`):**
    ```json
        {
            "id": 1,
            "cod": "LabA101",
            "sala": "Laboratorio 12",
            "cap": 25,
            "resp": "Lindomar",
            "per": "T"
        }
    ```
## O que faltou fazer:

//fazer query parameters aqui no search
// Criar o create e delete de turmas 
// Fazer o delete de todos 

>> Now, this is example for Create professor using @Api_View. For more explanation, acess ```View```.

## Create New Professor

This endpoint allows the creation of a new professor using a POST request. It is implemented with @Api_View, which enables detailed control over the request handling.

**Endpoint**
**Method**:```http://127.0.0.1:8000/api/professores```

**Authorization 🔒**

**```Requires Bearer Token for authentication.```**

**Request Example** ```POST```

````json
    {
        "ni": "67890",
        "nome": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "cel": "555-9876",
        "ocup": 30.0
    }
````
**Response Example**
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
``````
