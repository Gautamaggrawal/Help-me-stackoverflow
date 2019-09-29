#!/bin/sh

# wait for PSQL server to start
sleep 10
docker-compose exec psql -U postgres -c "CREATE DATABASE postgres;"
docker-compose exec psql -U postgres -c "CREATE USER myprojectuser WITH PASSWORD 'password';"
docker-compose exec psql -U postgres -c "ALTER ROLE myprojectuser SET client_encoding TO 'utf8';"
docker-compose exec psql -U postgres -c "ALTER ROLE myprojectuser SET default_transaction_isolation TO 'read committed';"
docker-compose exec psql -U postgres -c "ALTER ROLE myprojectuser SET timezone TO 'UTC';"
docker-compose exec psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE postgres TO myprojectuser;"
cd backend  
# prepare init migration
su -m myuser -c "python3 manage.py makemigrations"  
# migrate db, so we have the latest db schema
su -m myuser -c "python3 manage.py migrate"  
# start development server on public ip interface, on port 8000
su -m myuser -c "python3 manage.py runserver 0.0.0.0:8000"  

