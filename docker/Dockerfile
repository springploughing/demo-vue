FROM nginx
LABEL maintainer="litchi0509@gmail.com"

#COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html

VOLUME ["/usr/share/nginx/html"]