# Docker Practice

### Day 1

+ basic docker commands (build, run, rm)
+ some flags to go with the command (-t, -d, -f)
+ created Dockerfile
+ created first custom docker image on top of node 16


### Day 2

+ docker run -p {localhost-port}:{docker-app-port} -d --name {name-of-the-container} {name-of-the-image}

ex : docker run -p 3000:3000 -d --name node-app node-app-image
