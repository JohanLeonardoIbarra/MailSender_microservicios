import { createTransport } from 'nodemailer';
import mailjetTransport from 'nodemailer-mailjet-transport';
import config from '../Config/config.js';

const transport = createTransport(mailjetTransport({
  auth: {
    apiKey: config.apiKey,
    apiSecret: config.secretKey
  }
}));

const sendEmail = async (to, subject, text, html) => {
    const mail = {
        from: config.companyMail,
        to,
        subject,
        text,
        html
      };

    try {
        const info = await transport.sendMail(mail);
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
}

export default sendEmail;