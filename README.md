### How to run?
```sh
docker run -p 8080:8080 -d krll/node-web-app
```
### How to use? For example
```sh
$ mkdir public
$ echo "Hello World" > public/index.html
$ docker run -p 8080:8080 -d -v ./public/:/usr/src/app/public --name=app krll/node-web-app
$ docker logs app                                                                                                                          
npm info it worked if it ends with ok                                                                                                                      
npm info using npm@2.15.11                                                                                                                                 
npm info using node@v4.6.2                                                                                                                                 
npm info prestart docker_web_app@1.0.0                                                                                                                     
npm info start docker_web_app@1.0.0                                                                                                                        
                                                                                                                                                           
> docker_web_app@1.0.0 start /usr/src/app                                                                                                                  
> node server.js                                                                                                                                           
                                                                                                                                                           
Running on http://localhost:8080
```