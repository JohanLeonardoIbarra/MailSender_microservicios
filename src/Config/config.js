import dotenv from 'dotenv';
dotenv.config()

const env = {
    companyMail: process.env.COMPANY_MAIL,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY,
    port: process.env.PORT
}

export default env;