# pull official base image
FROM node:14.16-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN npm install -g react-scripts 
RUN yarn

# add app
COPY . ./

# start app
CMD ["yarn", "start"]