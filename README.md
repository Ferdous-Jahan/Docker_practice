# Docker Practice

### Day 1

+ basic docker commands (build, run, rm)
+ some flags to go with the command (-t, -d = detached mode, -f = force, --name)
+ created Dockerfile
+ created first custom docker image on top of node 16


### Day 2

+ Flags learnt (-p = port, -it = interactive mode)
+ run container named 'node-app' from custom built image named 'node-app-image'  
pseudo command : docker run -p {localhost-port}:{docker-app-port} -d --name {name-of-the-container} {name-of-the-image}
```bash
    docker run -p 3000:3000 -d --name node-app node-app-image
```
+ get inside docker bash
```bash
    docker exec -it node-app bash
```