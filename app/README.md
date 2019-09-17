This react app has been created to work with Docker.  In order to use this with docker follow these steps:

* docker build -t my-nodejs-app .

The following command will run the app and mount the src and public folders so that the docker image does not need to be restarted for most changes
* docker run -p 49160:3000 -v ${PWD}/src:/usr/src/app/src -v ${PWD}/public:/usr/src/app/public  -d my-nodejs-app


You can check on the status and stop it using:

* docker ps
* docker logs <container ID>
* docker stop <container ID>
