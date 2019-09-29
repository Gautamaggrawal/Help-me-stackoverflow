# use base python image with python 3.7
FROM python:3.7

# add requirements.txt to the image
ADD requirements.txt /app/requirements.txt

# set working directory to /app/
WORKDIR /app/

# install python dependencies
RUN pip install -r requirements.txt

RUN adduser --disabled-password --gecos '' myuser  

