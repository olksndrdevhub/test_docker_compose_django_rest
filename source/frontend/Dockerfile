###########
# BUILDER #
###########

# pull official base image
FROM node:14.5.0-alpine as builder

# set work directory
WORKDIR /usr/src/app

# install dependencies and avoid `node-gyp rebuild` errors
COPY package.json .
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

# copy our react project
COPY ./ .

# perform npm build
RUN npm run build

#########
# FINAL #
#########

# pull official base image
FROM node:14.5.0-alpine

# set work directory
WORKDIR /usr/src/app

# install serve - deployment static server suggested by official create-react-app
RUN npm install -g serve

# copy our build files from our builder stage
COPY --from=builder /usr/src/app/build ./build
