FROM node:17-alpine

ENV NODE_ENV production

WORKDIR /opt/app

# Install depedencies
COPY package*.json .
RUN npm ci --omit=dev

# Build app and run
COPY . .
RUN npm run build

USER node

CMD ["node", "dist/main"]