# API DE CLIMA FRONTEND

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#comenzando">Comenzando</a>
      <ul>
        <li><a href="#pre-requisitos">Pre-requisitos</a></li>
      </ul>
        <ul>
        <li><a href="#instalación-y-ejecución">Instalación y ejecución</a></li>
      </ul>
    </li>
    <li><a href="#construido-con">Tecnologias usadas</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>


## Comenzando 

### Pre-requisitos 
_Para ejecutar este proyecto es necesario contar con [Docker](https://docs.docker.com/engine/install/)_




### Instalación y ejecución

1. Clonar el repositorio
   ```sh
   git clone https://github.com/Emmanuel198/weather-service.git
   cd ./weather-service
   git checkout master
   ```
2. Crear archivo de configuracion **.env** para las variables de entorno 
   1. debera completar dos variables las cuales son
        ```
        REACT_APP_WEATHER_API_KEY=
        REACT_APP_URL_WEATHER_API=
        ```
    1.  El valor para REACT_APP_URL_WEATHER_API  es **https://api.weatherbit.io/v2.0**
   
    2. El valor para  REACT_APP_WEATHER_API_KEY se obtiene registrandose en la pagina de [weatherbit API](https://www.weatherbit.io/account/create)
   
   
3. Ejecutar
   ```sh
    docker build -t servicio-clima/weather-service:latest .
    docker run --rm -d -p 8081:80 servicio-clima/weather-service:latest
   ```
   
4. En su navegador acceder a `http://localhost:8081`
   


## Construido con 

* [ReactJs v17](https://es.reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Axios](https://axios-http.com/docs/intro)
* [Docker](https://www.docker.com/)

## Contacto

* **Romero Emmanuel** - [Linkedin](https://www.linkedin.com/in/emmanuel-romero-8448b91b7/)

<p align="right">(<a href="#top">Volver arriba</a>)</p>