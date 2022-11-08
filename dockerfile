FROM node:19-bullseye
WORKDIR /TP-WIK-DPS-TP01

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
run npx tsc

RUN adduser --no-create-home --group --disabled-login --system www
RUN chown www -R /TP-WIK-DPS-TP01
USER www

CMD node build/app.js