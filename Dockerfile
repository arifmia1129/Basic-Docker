# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
CMD ["node", "index.js"] 
EXPOSE 8080
