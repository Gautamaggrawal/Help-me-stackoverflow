# use base python image with python 3.7
FROM python:3.7

# add requirements.txt to the image
ADD requirements.txt /app/requirements.txt

# set working directory to /app/
WORKDIR /app/

# install python dependencies
RUN pip3 install -r requirements.txt
RUN apt-get install gdal-bin
RUN adduser --disabled-password --gecos '' myuser  

