### THIS IS JUST A TEMPORARY THING TO MAKE SURE OUR PODS STOP CRASHING
### UNTILL WE HAVE CRAFTED A WORKING DOCKERFILE FOR THE ACTUAL APPLICATION

FROM docker.intern.sparebank1.no/ubi8-nodejs18/master:latest as base

WORKDIR /app

COPY cacert.pem .
RUN npm config set cafile /app/cacert.pem
ENV NODE_EXTRA_CA_CERTS=/app/cacert.pem

COPY . .
RUN echo "OK" > healthcheck
RUN npm install -g http-server

EXPOSE 3000

CMD npx http-server . -p 3000