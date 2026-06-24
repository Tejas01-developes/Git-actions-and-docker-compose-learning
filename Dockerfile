FROM node:24-alpine AS builder

WORKDIR /node

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./


COPY . .

RUN yarn install
RUN yarn build


FROM node:24-alpine AS runner

WORKDIR /node
RUN corepack enable

COPY --from=builder /node/node_modules ./node_modules
COPY --from=builder /node/dist ./dist
COPY --from=builder /node/package.json ./

EXPOSE 3000
CMD ["node","./dist/app.js"]
