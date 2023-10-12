
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
## Casos de Uso
## Base de Datos
