# Nodebots
JavaScript Robotics using Johnny-Five framework.

https://nodebots.io


## Projects

**Nodebot Workshop**

Nodebot workshop from [nodeschool](https://nodeschool.io/)

- blink-blink   (LEDs)
- servo-wave    (Servo Motors)  
- spin-motor-spin (DC Motors)
- light-switch (Buttons)

**Servo Server**

Express REST API that controls a servo connected to an Arduino Uno.
 
## Docker
A Docker development environment with Node.js and all necessary Node modules is available.

*(Hardware access available only when running Docker from a Linux host)

You can set it up by executing:

```bash
$ cd devops/
$ docker-compose up --build
```

To enter the container use:

```bash
$ docker exec -it devops_nodebot_1 bash
```

**Network**
- nodebot @ port 6000 

**Device** (Linux only)
- /dev/ttyUSB0
