FROM node:alpine3.17 AS build-stage
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:1.15
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
