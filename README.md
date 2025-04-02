```bash 
cd my-website 

npm install 

npm start

```

1. List and Create Professores (Teachers)
Endpoint:
http
Copiar
GET /api/professores
POST /api/professores
Description:

GET: Lists all professors.

POST: Creates a new professor in the system.

Access:

URL: http://127.0.0.1:8000/api/professores

View:
python
Copiar
path('professores', listar_professores)
@api_view listar_professores: Handles both listing and creating professors.

2. List and Create Professores (Teachers) with ViewSet
Endpoint:
http
Copiar
GET /api/prof
POST /api/prof
Description:

GET: Lists all professors.

POST: Creates a new professor in the system.

Access:

URL: http://127.0.0.1:8000/api/prof

View:
python
Copiar
path('prof', ProfessoresView.as_view())
Class: ProfessoresView: A viewset that supports listing and creating professors.

3. Professor Detail (Retrieve, Update, Delete)
Endpoint:
http
Copiar
GET /api/id/{pk}
PUT /api/id/{pk}
DELETE /api/id/{pk}
Description:

GET: Retrieves a professor's details.

PUT: Updates a professor's details.

DELETE: Deletes a professor.

Access:

URL: http://127.0.0.1:8000/api/id/{pk}

View:
python
Copiar
path('id/<int:pk>', ProfessoresDetailView.as_view())
Class: ProfessoresDetailView: Handles retrieving, updating, and deleting a specific professor.

4. Obtain JWT Token (Authentication)
Endpoint:
http
Copiar
POST /api/token/
Description:

POST: Obtains JWT access and refresh tokens when valid credentials are provided (username and password).

Access:

URL: http://127.0.0.1:8000/api/token/

View:
python
Copiar
path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair')
Class: TokenObtainPairView: Used to obtain the access token and refresh token.

5. Refresh JWT Token
Endpoint:
http
Copiar
POST /api/refresh/
Description:

POST: Refreshes the access token using a valid refresh token.

Access:

URL: http://127.0.0.1:8000/api/refresh/

View:
python
Copiar
path('refresh/', TokenRefreshView.as_view(), name='token_refresh')
Class: TokenRefreshView: Used to refresh the access token.

6. Search Professores by Name
Endpoint:
http
Copiar
GET /api/buscar/nome/?search={nome}
Description:

GET: Searches professors by their name using the query parameter search.

Access:

URL: http://127.0.0.1:8000/api/buscar/nome/

View:
python
Copiar
path('buscar/nome/', buscar_nome_professor)
@api_view buscar_nome_professor: Handles searching for professors by their name.

7. List Professores with Search Functionality
Endpoint:
http
Copiar
GET /api/search/
Description:

GET: Lists all professors with the ability to search (based on name) using filters.

Access:

URL: http://127.0.0.1:8000/api/search/

View:
python
Copiar
path('search/', ProfessoresSearchView.as_view())
Class: ProfessoresSearchView: Handles listing professors with search functionality by name.

8. List and Create Disciplinas (Subjects)
Endpoint:
http
Copiar
GET /api/disciplinas
POST /api/disciplinas
Description:

GET: Lists all subjects.

POST: Creates a new subject.

Access:

URL: http://127.0.0.1:8000/api/disciplinas

View:
python
Copiar
path('disciplinas', DisciplinasView.as_view())
Class: DisciplinasView: A viewset that supports listing and creating subjects.

9. Disciplina Detail (Retrieve, Update, Delete)
Endpoint:
http
Copiar
GET /api/disciplina/{pk}
PUT /api/disciplina/{pk}
DELETE /api/disciplina/{pk}
Description:

GET: Retrieves details of a specific subject.

PUT: Updates a subject.

DELETE: Deletes a subject.

Access:

URL: http://127.0.0.1:8000/api/disciplina/{pk}

View:
python
Copiar
path('disciplina/<int:pk>', DisciplinaDetailView.as_view())
Class: DisciplinaDetailView: Handles retrieving, updating, and deleting a specific subject.

10. List and Create Ambientes (Classrooms)
Endpoint:
http
Copiar
GET /api/ambientes
POST /api/ambientes
Description:

GET: Lists all classrooms.

POST: Creates a new classroom.

Access:

URL: http://127.0.0.1:8000/api/ambientes

View:
python
Copiar
path('ambientes', AmbientesView.as_view())
Class: AmbientesView: A viewset that supports listing and creating classrooms.

11. Ambiente Detail (Retrieve, Update, Delete)
Endpoint:
http
Copiar
GET /api/ambiente/{pk}
PUT /api/ambiente/{pk}
DELETE /api/ambiente/{pk}
Description:

GET: Retrieves details of a specific classroom.

PUT: Updates a classroom.

DELETE: Deletes a classroom.

Access:

URL: http://127.0.0.1:8000/api/ambiente/{pk}

View:
python
Copiar
path('ambiente/<int:pk>', AmbienteDetailView.as_view())
Class: AmbienteDetailView: Handles retrieving, updating, and deleting a specific classroom.

12. List and Create Turmas (Classes)
Endpoint:
http
Copiar
GET /api/turmas
POST /api/turmas
Description:

GET: Lists all classes.

POST: Creates a new class.

Access:

URL: http://127.0.0.1:8000/api/turmas

View:
python
Copiar
path('turmas', TurmasView.as_view())
Class: TurmasView: A viewset that supports listing and creating classes.

13. Turma Detail (Retrieve, Update, Delete)
Endpoint:
http
Copiar
GET /api/turma/{pk}
PUT /api/turma/{pk}
DELETE /api/turma/{pk}
Description:

GET: Retrieves details of a specific class.

PUT: Updates a class.

DELETE: Deletes a class.

Access:

URL: http://127.0.0.1:8000/api/turma/{pk}

View:
python
Copiar
path('turma/<int:pk>', TurmaDetailView.as_view())
Class: TurmaDetailView: Handles retrieving, updating, and deleting a specific class.

14. List and Create Cursos (Courses)
Endpoint:
http
Copiar
GET /api/cursos
POST /api/cursos
Description:

GET: Lists all courses.

POST: Creates a new course.

Access:

URL: http://127.0.0.1:8000/api/cursos

View:
python
Copiar
path('cursos', CursosView.as_view())
Class: CursosView: A viewset that supports listing and creating courses.

15. Curso Detail (Retrieve, Update, Delete)
Endpoint:
http
Copiar
GET /api/curso/{pk}
PUT /api/curso/{pk}
DELETE /api/curso/{pk}
Description:

GET: Retrieves details of a specific course.

PUT: Updates a course.

DELETE: Deletes a course.

Access:

URL: http://127.0.0.1:8000/api/curso/{pk}

View:
python
Copiar
path('curso/<int:pk>', CursoDetailView.as_view())
Class: CursoDetailView: Handles retrieving, updating, and deleting a specific course.

This documentation should provide a clear guide for using the various endpoints in your API. Each endpoint description includes the HTTP methods, the URL path, the access point, and the related view class.