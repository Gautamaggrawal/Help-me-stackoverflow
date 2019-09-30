# Help-me-stackoverflow
An application over StackOverflowAPI for searching questions in StackOverflow

To build container
docker-compose build
To start container 
docker-compose up

Teachnologies Used:
Django rest framework(APIS)
Celery(Queue)
Redis(Message Broker)
Angular 7 (SPA)
Docker(Deployement)

# Help-me-stackoverflow
## An application over StackOverflowAPI for searching questions in StackOverflow

[![Python Version](https://img.shields.io/badge/python-3.7-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-2.1-brightgreen.svg)](https://djangoproject.com)

-----------------------------------------------------------------------------------------------------------------
**Functionality:**
* Able to search all available fields/parameter.
* Data is cached
* Added Throttling of (Search limit per min(5) and per day(100) )
* Filters according to sorts and order

**Technologies Used:**
* Django rest framework(APIS)
* Celery(Queue)
* Redis(Message Broker)
* Angular 7 (SPA)
* Docker(Deployement)

**To setup the project on your local machine:**

1. Click on `Fork`.
2. Go to your fork and `clone` the project to your local machine.
3. `git clone https://github.com/Gautamaggrawal/Help-me-stackoverflow.git`
4. Install the Docker and Docker-compose.
5. Run the following docker commands
```bash
docker-compose build
docker-compose up
```
The APIs will be available at **127.0.0.1:8000**.

***To run angular***
```bash
cd frontend/stackoverflowfrontend
npm install
ng serve
```
Navigate to http://localhost:4200/



