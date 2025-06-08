FROM node:24-alpine

RUN addgroup -S sakupagegroup && adduser -S sakupageuser -G sakupagegroup

WORKDIR /sakupageF

RUN chown sakupageuser:sakupagegroup /sakupageF

COPY --chown=sakupageuser:sakupagegroup package*.json ./

USER sakupageuser

RUN npm install

COPY --chown=sakupageuser:sakupagegroup . .

EXPOSE 3000

CMD ["npm", "run", "dev"]