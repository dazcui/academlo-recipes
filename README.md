# SKELETON

- Express
- PostgreSQL
- Sequelize ORM 
- Autenticación con Tokens
- Bcrypt para hashear contraseñas
- Uso de Json Web Token

---

- Rutas de Login y creación de usuario (register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autenticacion y manejo de permisos
- /users/:id DELETE, PUT
- /users/me

Orden
1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas

Ordenes
post localhost:9000/api/v1/auth/register
get localhost:9000/api/v1/users
post localhost:9000/api/v1/auth/login
get localhost:9000/api/v1/users/me

#Blog API
- Front:
    - Obtener todas las publicaciones
    - Obtener una en especifico
    - Obtener todas las categorias
    - Obtener todos los post de una categoria en especifico
    - Obtener todos los posts que he creado
    - Obtener todos los posts de un usuario en especifico
    - Paginar los posts
    - Acciones de CRUD sobre Posts
    - Crear categofias


- JSON:
    {
        "total": 68,    
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data":[
            {
                "id":"1",
                "title":"ejemplo,
                "constent":"lorem ipsum",
                "createdBy":{
                    "id": 18,
                    "name"::David",
                    "email":"david@david.com",
                },
                "category:{
                    "id":4,
                    "name":"Tecnologia"
                }
            }
        ]
    }


