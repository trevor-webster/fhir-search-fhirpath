# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /fhirpath
COPY . .
RUN yarn install --production
CMD ["node", "index.js"]
EXPOSE 3000