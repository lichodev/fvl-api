FROM node:17.9-alpine

WORKDIR /opt/app
ENV NODE_ENV production

# Install depedencies
COPY package*.json .
RUN npm ci --omit=dev

# Build app and run
COPY . .
RUN npm run build

USER node

CMD ["node", "dist/main"]