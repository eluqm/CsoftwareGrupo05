
## Título de la Aplicación: 
<h1 align="center"> Blog Connect</h1>

## Tabla de contenidos:
- [Problemática]
- [Solución]
- [Herramientas Utilizadas]
- [Diagrama de Entidad-Relación]
- [Diagrama de Secuencia]
- [Casos de Uso]


## Problemática: 
Dispersión de Información en Estudiantes de Ingeniería de Software

## Solución :

En el mundo de la Ingeniería de Software, la adquisición y el intercambio de información relevante son fundamentales para el crecimiento y el éxito de los estudiantes y profesionales en este campo. Sin embargo, con la creciente cantidad de recursos disponibles en línea, surge la problemática de la dispersión de información. La información vital se encuentra en diversos lugares, lo que dificulta su localización y acceso eficientes.

"Blog Connect" surge como una solución a esta problemática. Esta aplicación web se ha diseñado específicamente para abordar los desafíos que enfrentan los estudiantes de Ingeniería de Software en su búsqueda de conocimiento. La plataforma resuelve el problema de la dispersión de información al proporcionar un espacio centralizado donde los usuarios pueden acceder y compartir contenido relacionado con la Ingeniería de Software.

Algunos de los aspectos clave que distinguen a "Blog Connect" son:

Publicación y Compartir de Contenido: Los usuarios pueden publicar y compartir artículos, tutoriales y recursos relacionados con la Ingeniería de Software. Esto fomenta la colaboración y el intercambio de conocimiento.

Exploración de una Amplia Gama de Temas: La plataforma abarca una amplia gama de temas, desde desarrollo de software hasta metodologías ágiles y buenas prácticas. Los usuarios pueden explorar y aprender sobre diversas áreas de la Ingeniería de Software.

Participación y Discusión: "Blog Connect" facilita la interacción y la discusión. Los usuarios pueden comentar en los artículos y participar en discusiones para intercambiar ideas, aclarar dudas y profundizar en temas específicos.

Búsqueda Eficaz de Contenido: La plataforma ofrece una funcionalidad de búsqueda robusta, lo que permite a los usuarios encontrar información específica de manera eficiente.

Colaboración entre Compañeros: Los estudiantes pueden colaborar y contribuir al crecimiento de la base de conocimiento en el campo de la Ingeniería de Software. La plataforma fomenta la colaboración entre compañeros.

"Blog Connect" se erige como un recurso esencial para estudiantes, profesionales y entusiastas de la Ingeniería de Software. Proporciona una solución efectiva a la problemática de la dispersión de información al reunir a la comunidad en un solo lugar donde pueden aprender, compartir y crecer juntos en su comprensión de este campo en constante evolución.
## Herramientas Utilizadas
Next.js: Utilizado como el marco de desarrollo para crear la aplicación web.

MongoDB: Usado como la base de datos para almacenar los datos del blog.

Prisma: Parece ser una herramienta relacionada con la base de datos, posiblemente utilizada para definir y gestionar modelos de datos.

Local Storage: Utilizado para almacenar datos localmente en el navegador del usuario.

NextAuth: Posiblemente utilizado para gestionar la autenticación de usuarios en la aplicación.

SWR: Esta es una biblioteca de React que podría utilizarse para la gestión de datos en tiempo real y la recuperación de datos del servidor.

Node.js: Mencionado en el contexto de configurar un servidor web en Hostinger.

## Diagrama de Entidad-Relación
![](https://github.com/eluqm/CsoftwareGrupo05/blob/main/ER.png)
Tabla user: Esta tabla almacena información sobre los usuarios. Cada usuario tiene un identificador único (_id) que se utiliza como clave primaria (PK) para identificarlos de manera única en la tabla. También almacena el nombre del usuario (name), su dirección de correo electrónico (email) de forma única (lo que significa que no puede haber dos usuarios con la misma dirección de correo electrónico) y una referencia a una imagen (image) asociada al usuario.

Tabla category: En esta tabla se registran las categorías. Cada categoría tiene un identificador único (_id) como clave primaria, un identificador único de tipo slug (slug), un título (title) para la categoría y una referencia a una imagen (img) relacionada con la categoría.

Tabla post: La tabla post se utiliza para almacenar información sobre las publicaciones. Cada publicación tiene un identificador único (_id) como clave primaria, un identificador único de tipo slug (slug), un título (title), una descripción (desc) de la publicación, una imagen asociada (img), el número de vistas (view) que ha recibido la publicación, así como las direcciones de correo electrónico del usuario que creó la publicación (userEmail) y la categoría a la que pertenece (catSlug). Las relaciones entre esta tabla y las tablas de user y category se establecen a través de las claves foráneas (userEmail y catSlug) que hacen referencia a las tablas user y category, respectivamente.

Tabla comment: Aquí se almacenan los comentarios realizados en las publicaciones. Cada comentario tiene un identificador único (_id) como clave primaria, una descripción (desc) del comentario, la dirección de correo electrónico del usuario que lo escribió (userEmail) y el identificador único de tipo slug de la publicación a la que se refiere (postSlug). Al igual que en la tabla de post, las relaciones entre esta tabla y las tablas user y post se establecen a través de las claves foráneas (userEmail y postSlug), que hacen referencia a las tablas user y post, respectivamente.

## Diagrama de Secuencia
![](https://github.com/eluqm/CsoftwareGrupo05/blob/main/SECUENCIA.png)

Actor Usuario: Representa al usuario que interactúa con la aplicación "BLOG CONNECT".

Participante "BLOG CONNECT" (BlogConnect): Representa la aplicación "BLOG CONNECT", que es la interfaz con la que el usuario interactúa.

Participante "Base de Datos" (Database): Representa la base de datos MongoDB, donde se almacenan los datos relacionados con las publicaciones y los comentarios.

A continuación, se detalla la secuencia de interacciones:

Paso 1: Acceso a "BLOG CONNECT"

El usuario inicia la interacción accediendo a la aplicación "BLOG CONNECT".
Paso 2: Iniciar Sesión con Google

El usuario selecciona la opción "Iniciar sesión con Google" en la aplicación.
La aplicación "BLOG CONNECT" inicia el proceso de autenticación con Google.
Paso 3: Autorización de Google

El usuario confirma la autorización de Google, lo que le permite acceder a la aplicación.
Paso 4: Crear una Nueva Publicación

El usuario crea una nueva publicación en la aplicación "BLOG CONNECT".
La aplicación "BLOG CONNECT" solicita almacenar la publicación en la base de datos (representada por la flecha hacia "Base de Datos").
La base de datos confirma el almacenamiento (representado por la flecha desde "Base de Datos").
Paso 5: Publicar la Publicación

El usuario publica la publicación en la aplicación.
La aplicación "BLOG CONNECT" confirma la publicación al usuario.
Paso 6: Leer una Publicación

El usuario accede a una publicación existente en la aplicación "BLOG CONNECT".
Paso 7: Escribir un Comentario

El usuario escribe un comentario en la publicación.
La aplicación "BLOG CONNECT" solicita almacenar el comentario en la base de datos (representada por la flecha hacia "Base de Datos").
La base de datos confirma el almacenamiento (representada por la flecha desde "Base de Datos").
Paso 8: Publicar el Comentario

El usuario publica el comentario en la aplicación.
La aplicación "BLOG CONNECT" confirma la publicación del comentario al usuario.
Este diagrama representa la secuencia de interacciones entre el usuario, la aplicación "BLOG CONNECT" y la base de datos MongoDB para el proceso de inicio de sesión, creación de publicaciones y comentarios en la página "BLOG CONNECT". Las flechas indican la dirección de las interacciones y las confirmaciones de almacenamiento en la base de datos. Cada paso refleja una acción específica realizada por el usuario o la aplicación en el proceso.
## Casos de Uso
![](https://github.com/eluqm/CsoftwareGrupo05/blob/main/Casos%20de%20Uso.png)

Usuario (User): Este actor representa a los usuarios de la aplicación "BLOG CONNECT". Los usuarios son las personas que utilizan la aplicación para realizar diversas acciones.

Iniciar Sesión con Google (GoogleSignIn): Este caso de uso representa la funcionalidad que permite a los usuarios iniciar sesión en la aplicación utilizando sus cuentas de Google. Los usuarios pueden autenticarse de manera segura a través de Google.

Crea una Publicación (CreatePost): Este caso de uso representa la funcionalidad que permite a los usuarios crear y publicar nuevas publicaciones en la página "BLOG CONNECT". Los usuarios pueden compartir sus pensamientos, historias o contenido a través de esta función.

Lee una Publicación (ReadPost): Este caso de uso representa la funcionalidad que permite a los usuarios acceder y leer las publicaciones existentes en la aplicación. Los usuarios pueden explorar y obtener información de las publicaciones creadas por otros usuarios.

Escribe un Comentario (WriteComment): Este caso de uso representa la funcionalidad que permite a los usuarios escribir y publicar comentarios en una publicación. Los usuarios pueden participar en discusiones, expresar opiniones o interactuar con otros usuarios a través de esta función.

Las relaciones entre los actores y los casos de uso se explican de la siguiente manera:

Usuario (User):

Interactúa con todas las funcionalidades de la aplicación, incluyendo la posibilidad de iniciar sesión con Google, crear publicaciones, leer publicaciones y escribir comentarios.
Iniciar Sesión con Google (GoogleSignIn):

Permite a los usuarios autenticarse de manera segura a través de sus cuentas de Google. Es una acción que el usuario puede realizar al principio de su interacción con la aplicación.
Crea una Publicación (CreatePost):

Permite a los usuarios crear y publicar nuevas publicaciones. Es una función que los usuarios pueden utilizar para compartir su contenido.
Lee una Publicación (ReadPost):

Permite a los usuarios acceder y leer las publicaciones existentes. Los usuarios pueden consumir contenido de otros usuarios a través de esta función.
Escribe un Comentario (WriteComment):

Permite a los usuarios escribir y publicar comentarios en las publicaciones. Esta función fomenta la interacción y la participación de los usuarios en la comunidad.
Espero que esta explicación detallada te ayude a comprender mejor cómo interactúan los actores con las diferentes funcionalidades de la aplicación "BLOG CONNECT". Puedes utilizar este diagrama como una referencia para diseñar y desarrollar la aplicación de acuerdo con estos casos de uso.
## Base de Datos
