
FROM node:lts-alpine
WORKDIR /api-restaurants
ADD ./package.json ./package.json
RUN npm install
# ADD ./ ./
CMD ["npm", "run", "dev"]