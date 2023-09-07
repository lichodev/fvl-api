FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /opt/app

# Install depedencies
COPY package*.json .
RUN npm ci --omit=dev

# Build app and run
COPY . .
RUN npm run build

EXPOSE 3000

USER node

CMD ["node", "dist/main"]