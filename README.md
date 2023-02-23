# Docker Practice

### Day 1

+ basic docker commands (build, run, rm)
+ some flags to go with the command (-t = add name for image, -d = detached mode, -f = force, --name = add name for container)
+ created Dockerfile
+ build first custom docker image on top of node 16
```bash
    docker build -t node-app-image.
```


### Day 2

+ Flags learnt (-p = port, -it = interactive mode)
+ run container named 'node-app' from custom built image named 'node-app-image'  
```bash
    docker run -p localhost-port:docker-app-port -d --name name-of-the-container name-of-the-image
```
```bash
    docker run -p 3000:3000 -d --name node-app node-app-image
```
+ get inside docker bash
```bash
    docker exec -it node-app bash
```
+ create a volume of binding with current folder to docker WORKDIR to update docker image when anything changes in local folder
```bash
    docker run -v ${pwd}:/app -p 3000:3000 -d --name  node-app node-app-image
```
"${pwd}" for windows powershell.
"$(pwd)" for UNIX