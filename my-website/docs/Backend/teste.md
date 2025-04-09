
---
sidebar_position: 7
---

# ⚙️ API Endpoints: The Digital Doorways to Our Data 🚪

Think of **endpoints** as specific web addresses (URLs) that act like digital doorways. When a client (like a web browser or a mobile app) wants to communicate with our server, it sends requests to these doorways to perform actions like:

* **Accessing** information 🧐
* **Updating** existing data ✍️
* **Registering** new entries 📝
* **Deleting** records 🗑️

In our application, these carefully crafted endpoints are the key to managing all our valuable data: from the dedicated teachers who shape minds, to the essential course details, and the very users who interact with our system.

## 🌐 Backend Endpoints: Where the Magic Happens ✨

Let's explore the specific endpoints that our backend provides to interact with different parts of our application. Remember, **Authorization** via a **Bearer Token** is required to access these secure pathways! 🔒

### 👨‍🏫 Managing Professors

* **🚪 Accessing All Professors:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/prof](http://127.0.0.1:8000/api/prof)```
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

* **🔑 Accessing a Specific Professor by ID:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/id/](http://127.0.0.1:8000/api/id/){id}``` (Replace `{id}` with the unique identifier of the professor, e.g., ```[http://127.0.0.1:8000/api/id/1](http://127.0.0.1:8000/api/id/1)```)
    * **Purpose:** Use this endpoint to fetch the details of a particular professor based on their unique `id`.
    * **Authorization:** Requires a valid Bearer Token.
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

* **🔄 Updating Professor Information:**
    * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/id/](http://127.0.0.1:8000/api/id/){id}``` (Again, replace `{id}` with the professor's ID, e.g., ```[http://127.0.0.1:8000/api/id/1](http://127.0.0.1:8000/api/id/1)```)
    * **Purpose:** This endpoint allows you to modify the information of an existing professor. You'll need to send the updated data in the request body.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Request Body (for `PUT`):**
        ```json
        {
          "id": 1,
          "ni": "1021328",
          "nome": "Lindomar Batistão",
          "email": "lin@linaa.com",
          "cel": "23132132123",
          "ocup": 50
        }
        ```
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
          "id": 1,
          "ni": "1021328",
          "nome": "Lindomar Batistão",
          "email": "lin@linaa.com",
          "cel": "23132132123",
          "ocup": 50
        }
        ```

* **➕ Creating a New Professor:**
    * **HTTP Method:** `POST`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/prof](http://127.0.0.1:8000/api/prof)```
    * **Purpose:** Use this endpoint to register a new professor in the system. You'll need to provide the professor's details in the request body.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Request Body (for `POST`):**
        ```json
        {
          "ni": "12345",
          "nome": "John Doe",
          "email": "johndoe@example.com",
          "cel": "555-1234",
          "ocup": 45.5
        }
        ```
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

    ```
    // 🚧 Under Construction: Query Parameters for Searching 🚧
    // We're planning to add functionality here to allow you to search for professors
    // based on specific criteria using query parameters (e.g., /api/prof?nome=Lindomar).
    // Stay tuned for updates!
    ```

### 📚 Managing Courses (Cursos)

* **🚪 Accessing All Courses:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/cursos](http://127.0.0.1:8000/api/cursos)```
    * **Purpose:** Retrieve a list of all the courses offered in our system.
    * **Authorization:** Requires a valid Bearer Token.
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

* **🔑 Accessing a Specific Course by ID:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/curso/](http://127.0.0.1:8000/api/curso/){id}``` (e.g., ```[http://127.0.0.1:8000/api/curso/1](http://127.0.0.1:8000/api/curso/1)```)
    * **Purpose:** Get the details of a specific course using its unique `id`.
    * **Authorization:** Requires a valid Bearer Token.
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

* **➕ Creating a New Course:**
    * **HTTP Method:** `POST`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/cursos](http://127.0.0.1:8000/api/cursos)```
    * **Purpose:** Register a new course in the system. Provide the course details in the request body.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Request Body (for `POST`):**
        ```json
        {
          "ni": "12345",
          "nome": "John Doe",
          "email": "johndoe@example.com",
          "cel": "555-1234",
          "ocup": 45.5
        }
        ```
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

* **🔄 Updating Course Information:**
    * **HTTP Method:** *(Missing in the original text)*
    * **Endpoint URL:** *(Likely similar to accessing by ID, using `PUT`)*
    * **Purpose:** *(Intended to modify existing course details)*
    * **Authorization:** *(Presumably requires a valid Bearer Token)*
    * **Example Request Body (for `PUT`):** *(Example would be provided here)*
    * **Example Response (HTTP Status: `200 OK`):** *(Example would be provided here)*

### 📚 Managing Disciplines (Disciplinas)

* **➕ Creating a New Discipline:**
    * **HTTP Method:** `POST`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/disciplinas](http://127.0.0.1:8000/api/disciplinas)```
    * **Purpose:** Register a new academic discipline. Provide the discipline's details in the request body.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Request Body (for `POST`):**
        ```json
        {
          "cod":"PJT",
          "disc":"Projetos",
          "ch":"45"
        }
        ```
    * **Example Response (HTTP Status: `201 CREATED`):**
        ```json
        {
          "id": 1,
          "cod": "PJT",
          "disc": "Projetos",
          "ch": 45
        }
        ```

* **🚪 Accessing All Disciplines:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/disciplinas](http://127.0.0.1:8000/api/disciplinas)```
    * **Purpose:** Retrieve a list of all the academic disciplines offered.
    * **Authorization:** Requires a valid Bearer Token.
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

* **🔑 Accessing a Specific Discipline by ID:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/disciplina/](http://127.0.0.1:8000/api/disciplina/){id}``` (e.g., ```[http://127.0.0.1:8000/api/disciplina/1](http://127.0.0.1:8000/api/disciplina/1)```)
    * **Purpose:** Get the details of a specific discipline using its `id`.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
          "id": 1,
          "cod": "PJT",
          "disc": "Projetos",
          "ch": 45
        }
        ```

* **🔄 Updating Discipline Information:**
    * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/disciplina/](http://127.0.0.1:8000/api/disciplina/){id}``` (e.g., ```[http://127.0.0.1:8000/api/disciplina/1](http://127.0.0.1:8000/api/disciplina/1)```)
    * **Purpose:** Modify the details of an existing discipline.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Request Body (for `PUT`):**
        ```json
        {
          "cod":"PJT_1",
          "disc":"Projetos Lindomar",
          "ch":"45"
        }
        ```
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
          "id": 1,
          "cod": "PJT_1",
          "disc": "Projetos Lindomar",
          "ch": 45
        }
        ```

### 🏫 Managing Classes (Turmas)

* **🚪 Accessing All Classes:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/turmas](http://127.0.0.1:8000/api/turmas)```
    * **Purpose:** Retrieve a list of all the classes (turmas) currently active.
    * **Authorization:** Requires a valid Bearer Token.
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

* **🔑 Accessing a Specific Class by ID:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/turma/](http://127.0.0.1:8000/api/turma/){id}``` (e.g., ```[http://127.0.0.1:8000/api/turma/1](http://127.0.0.1:8000/api/turma/1)```)
    * **Purpose:** Get the details of a specific class using its `id`.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
          "id": 1,
          "cod": "DS16",
          "turrma": "2DS_MB_16"
        }
        ```

* **🔄 Updating Class Information:**
    * **HTTP Method:** `PUT`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/turma/](http://127.0.0.1:8000/api/turma/){id}``` (e.g., ```[http://127.0.0.1:8000/api/turma/1](http://127.0.0.1:8000/api/turma/1)```)
    * **Purpose:** Modify the details of an existing class.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Request Body (for `PUT`):**
        ```json
        {
          "cod":"DS16",
          "turrma":"2DS_MB_16&15"
        }
        ```
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
        {
          "id": 1,
          "cod": "DS16",
          "turrma": "2DS_MB_16&15"
        }
        ```

### 🏢 Managing Environments (Ambientes)

* **🚪 Accessing All Environments:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/ambientes](http://127.0.0.1:8000/api/ambientes)```
    * **Purpose:** Retrieve a list of all the available environments (e.g., classrooms, labs).
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Response (HTTP Status: `200 OK`):**
        ```json
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

* **🔑 Accessing a Specific Environment by ID:**
    * **HTTP Method:** `GET`
    * **Endpoint URL:** ```[http://127.0.0.1:8000/api/ambiente/](http://127.0.0.1:8000/api/ambiente/){id}``` (e.g., ```[http://127.0.0.1:8000/api/ambiente/1](http://127.0.0.1:8000/api/ambiente/1)```)
    * **Purpose:** Get the details of a specific environment using its `id`.
    * **Authorization:** Requires a valid Bearer Token.
    * **Example Response (HTTP Status: `200 OK`):**
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

* **🔄 Updating Environment Information:**
    * **HTTP Method:** `PUT`