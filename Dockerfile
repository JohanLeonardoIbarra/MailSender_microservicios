FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

ENV PORT 5600
ENV COMPANY_MAIL johanleonardois@ufps.edu.co
ENV API_KEY 501053394df6f9762ba0c926ae564717
ENV SECRET_KEY e66600897bdc01297e6a3fb480f52422

EXPOSE 5600

CMD [ "npm", "run", "start" ]