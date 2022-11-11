FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

ENV PORT 8080
ENV COMPANY_MAIL johanleon950@outlook.es
ENV API_KEY ae5cfbb4e8cf9f9c62ed7b4929439978
ENV SECRET_KEY a4e982fb8e183ee73728f1e9330a86df

EXPOSE 8080

CMD [ "npm", "run", "start" ]