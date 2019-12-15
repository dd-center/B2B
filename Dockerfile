FROM node:slim
LABEL maintainer="afanyiyu@hotmail.com"
LABEL version="0.1.0"
WORKDIR /app
COPY . /app
EXPOSE 2002
ENTRYPOINT node index
