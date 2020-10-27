FROM node:alpine
MAINTAINER Elie BENAYOUN <elie.benayoun@ynov.com>
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8884
CMD node .
