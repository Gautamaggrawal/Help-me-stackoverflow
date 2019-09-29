# Help-me-stackoverflow
An application over StackOverflowAPI for searching questions in StackOverflow

To build container
docker-compose build
To start container 
docker-compose up



Features
1) Able to search all available fields/parameter.
3) Data is cached
4) Added Throttling of (Search limit per min(5) and per day(100) )

Teachnologies Used:
Django rest framework(APIS)
Celery(Queue)
Redis(Message Broker)
Angular 7 (SPA)
Docker(Deployement)


