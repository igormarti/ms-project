# ms-project
Project created using microservices architecture with gateway api using nodeJS, the api is responsible for routing between the client and the microservices. Message exchange is done with http and amqp requests. The project also use docker and docker-compose.

# Requeriments

<ul>
  <li><a href="https://docs.docker.com/" target="_blank" >Docker</a></li>
  <li><a href="https://docs.docker.com/compose/" target="_blank" >Docker Compose</a></li>
</ul>  

# Languages of each service

<ul> 
  <li>api-gateway use NodeJS </li>
  <li>ms-users use NodeJS </li>
  <li>ms-products use NodeJS </li>
  <li>ms-orders use Java Spring Boot </li>
</ul>

# Flow summary

<ol>
  <li>Create user in route /users using method POST</li>
  <li>User logs in route /login using method POST</li>
  <li>User Create product in route /products using method POST</li>
  <li>User list products in route /products using method GET</li>
  <li>User buy products in route /orders using method POST</li>
</ol>  
