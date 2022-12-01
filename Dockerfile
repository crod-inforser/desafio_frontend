FROM node:16

RUN npm i -g serve
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

CMD ["serve","/app/build"]