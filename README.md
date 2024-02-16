<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://fidatech.net/felipe/">
    <img src="https://github.com/fisaavedrae/desafio_bd_node_ii/blob/main/frontend/src/assets/fse_logo_blanco.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Desafío - Soft Jobs</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/fisaavedrae/desafio_jwt"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/fisaavedrae/desafio_jwt">View Demo</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_jwt/issues">Report Bug</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_jwt/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del Proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Desafío - Soft Jobs

[![Product Name Screen Shot][product-screenshot]](https://fidatech.net/felipe/)

<ul>
<li>
Para realizar este desafío debes haber estudiado previamente todo el material
disponible correspondiente a la unidad.
</li>
<li>Desarrollo desafío:
<ul>
<li>Para la realización del desafío necesitarás apoyarte del archivo Apoyo Desafío - Soft Jobs.</li>
</li>
</ul></ul>

## Descripción
La empresa Soft Jobs ha iniciado el desarrollo de una plataforma que busca apoyar a la comunidad de desarrolladores juniors a conseguir trabajos cortos y sencillos para acumular experiencia laboral y mejorar sus oportunidades.

En este desafío serás backend developer de la empresa y deberás crear un servidor para la autenticación y autorización de usuarios usando JWT.

Deberás descargar el material de apoyo en el que encontrarás una aplicación cliente desarrollada con React preparada para consumir las rutas de tu servidor.

A continuación, te mostramos imágenes de la aplicación cliente disponible en el material de apoyo.

Para realizar este desafío necesitarás ejecutar el siguiente script sql en tu terminal psql para crear la base de datos y la tabla que utilizaremos: (No alterar por favor el nombre de base de datos, de tabla, de campos, tipo de datos, longitud y data a cargar)

```sql
CREATE DATABASE softjobs;
\c softjobs;

CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );

SELECT * FROM usuarios;
```

Tu servidor debe: (todo se probará prioritariamente desde el VSCODE con Thunder Client)
<ul>
<li>Permitir el registro de nuevos usuarios a través de una ruta POST /usuarios (Validación en el backend de que exista el body, que este completo con los datos requeridos, no permitir 
realizar POST sin body o con body incompleto o con campos vacíos)</li>
<li>Ofrecer la ruta POST /login que reciba las credenciales de un usuario y devuelva un token generado con JWT. Se debe incluir el payload del token el email del usuario registrado.
(SOLO ESTA RUTA DEBE GENERAR Y DEVOLVER UN TOKEN, debe validarse en el Backend sino existe un body o esta vacío o incompleto, también validar si el correo existe y validar si la contraseña es correcta)</li>
<li>Disponibilizar una ruta GET /usuarios para devolver los datos de un usuario en caso de que esté autenticado, para esto: (solo esta ruta debe usar token generado por POST /login)
  <ul>
    <li>Extraiga un token disponible en la propiedad Authorization de las cabeceras</li>
    <li>Verifique la validez del token usando la misma llave secreta usada en su firma</li>
    <li>Decodifique el token para obtener el email del usuario a buscar en su payload</li>
    <li>Obtenga y devuelva el registro del usuario</li>
  </ul>
</li>
</ul>

> Nota: Validar desde su backend en la ruta GET /usuarios, que exista el token o que el token sea el correcto

## Requerimientos
<ol>
<li>Registrar y obtener usuarios de la base de datos (1.5 puntos)</li>
<li>Usar middlewares para (2 puntos): (Obligatorio aplicar estos middleware)
  <ul>
    <li>Verificar la existencia de credenciales en la ruta que corresponda</li>
    <li>Validar el token recibido en las cabeceras en la ruta que corresponda</li>
    <li>Reportar por la terminal las consultas recibidas en el servidor</li>
  </ul>
</li>
<li>Firmar, verificar y decodificar tokens JWT (3 puntos)</li>
<li>Capturar y devolver los posibles errores que ocurran en el servidor (0.5 puntos)</li>
<li>Encriptar las contraseñas al momento de registrar nuevos usuarios (3 puntos)</li>
</ol>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Json][Json]][Json-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

Para ejecutar el proyecto se debe usar nodemon, cors, dotenv, jwt

El proyecto esta divido en dos carpetas, Backend y Frontend.

El backend tiene las siguientes rutas

<ul>
<li>GET: http://localhost:3000/usuarios</li>
<li>POST: http://localhost:3000/usuarios</li>
<li>POST: http://localhost:3000/login</li>
</ul>
 
 Para iniciar el servidor de Backend, se debe ejecutar el comando, desde la ruta <b>/backend/</b> 

 ```bash
 nodemon server/index.js
 ```

 El archivo .env debe ir en la carpeta <b>/backend/</b>  con las siguientes variables, que se deben completar con la informacion del servidor local

 ```bash
DB_USER=""
DB_DATABASE=""
DB_HOST=""
DB_PASSWORD=""

SECRET = "az_AZ"

PORT=3000
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contacto

Felipe Saavedra - [@fisaavedrae](https://fidatech.net/felipe/) - fisaavedrae@gmail.com

Project Link: [https://github.com/fisaavedrae/desafio_jwt](https://github.com/fisaavedrae/desafio_jwt)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://github.com/fisaavedrae/desafio_jwt.svg?style=for-the-badge
[contributors-url]: https://github.com/fisaavedrae/desafio_jwt/graphs/contributors
[forks-shield]: https://github.com/fisaavedrae/desafio_jwt.svg?style=for-the-badge
[forks-url]: https://github.com/fisaavedrae/desafio_jwt/network/members
[stars-shield]: https://github.com/fisaavedrae/desafio_jwt.svg?style=for-the-badge
[stars-url]: https://github.com/fisaavedrae/desafio_jwt/stargazers
[issues-shield]: https://github.com/fisaavedrae/desafio_jwt.svg?style=for-the-badge
[issues-url]: https://github.com/fisaavedrae/desafio_jwt/issues
[license-shield]: https://github.com/fisaavedrae/desafio_jwt.svg?style=for-the-badge
[license-url]: https://github.com/fisaavedrae/desafio_jwt/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/felipe-saavedra-escobar/
[product-screenshot]: https://github.com/fisaavedrae/desafio_bd_node_ii/blob/main/frontend/src/assets/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Json]: https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white
[Json-url]: https://www.json.org/json-es.html
[Bootstrap]: https://img.shields.io/badge/bootstrap-000000?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com/

