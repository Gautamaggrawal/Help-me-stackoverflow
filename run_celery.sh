#!/bin/sh

# wait for RabbitMQ server to start
sleep 10

cd backend  
# run Celery worker for our project myproject with Celery configuration stored in Celeryconf
#"celery worker -A myproject.celeryconf -Q default -n default@%h"
"celery -A stackoveflow_backend worker -l info"


