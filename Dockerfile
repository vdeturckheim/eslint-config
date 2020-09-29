FROM node:12

WORKDIR /project
COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "test"]
