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

<h3 align="center">Desafío - Like Me (Parte II)</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii">View Demo</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii/issues">Report Bug</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_bd_node_ii/issues">Request Feature</a>
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
## Desafío - Like Me (Parte II)

[![Product Name Screen Shot][product-screenshot]](https://fidatech.net/felipe/)

<ul>
<li>
Para realizar este desafío debes haber estudiado previamente todo el material
disponible correspondiente a la unidad.
</li>
<li>Desarrollo desafío:
<ul>
<li>El desafío se debe desarrollar de manera Individual.</li>
<li>Para la realización del desafío necesitarás apoyarte del desafío realizado en la unidad anterior</li>
</li>
</ul></ul>

## Descripción
La red social “Like Me” sigue desarrollando su plataforma y ahora necesita permitir la interacción de likes y la eliminación de posts.

En esta segunda parte del desafío deberás:


## Requerimientos
<ul>
<li>Agregar una ruta PUT en una API REST y utilizarla para modificar registros en una tabla alojada en PostgreSQL (4 puntos)</li>
<li>Agregar una ruta DELETE en una API REST y utilizarla para eliminar registros en una tabla alojada en PostgreSQL (4 puntos)</li>
<li>Capturar los posibles errores en una consulta SQL realizada con el paquete pg usando la sentencia try catch (2 puntos)</li>
</ul>

Puedes utilizar el archivo llamado “Apoyo ejemplo Desafío - Like Me (parte II)” el cual contiene un ejemplo de cómo realizar un Crud utilizando fetch en React.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Json][Json]][Json-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

Para ejecutar el proyecto se debe usar nodemon, cors y dotenv

El proyecto esta divido en dos carpetas, Backend y Frontend.

El backend tiene las siguientes rutas

<ul>
<li>GET: http://localhost:3000/posts/</li>
<li>POST: http://localhost:3000/posts/</li>
<li>PUT: http://localhost:3000/posts/id</li>
<li>DELETE: http://localhost:3000/posts/id</li>
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
PORT = ""
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contacto

Felipe Saavedra - [@fisaavedrae](https://fidatech.net/felipe/) - fisaavedrae@gmail.com

Project Link: [https://github.com/fisaavedrae/desafio_bd_node_ii](https://github.com/fisaavedrae/desafio_bd_node_ii)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[contributors-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[forks-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/network/members
[stars-shield]: https://img.shields.io/github/stars/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[stars-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/stargazers
[issues-shield]: https://img.shields.io/github/issues/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[issues-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/issues
[license-shield]: https://img.shields.io/github/license/fisaavedrae/desafio_bd_node_ii.svg?style=for-the-badge
[license-url]: https://github.com/fisaavedrae/desafio_bd_node_ii/blob/master/LICENSE.txt
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
