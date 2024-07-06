FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install
# copy my code
COPY . .
EXPOSE 3001
# cmd to run or 
CMD [ "npm", "start" ]