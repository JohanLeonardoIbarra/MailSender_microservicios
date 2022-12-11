import mailService from '../Service/MailService.js';
import httpStatus from 'http-status-codes';

const sendMail = async (req, res) => {
    const {to, subject, text, html} = req.body;

    console.log(`Mail sended to ${to}, Subject: ${subject}`)
    //mailService(to, subject, text, html);
    return res.sendStatus(httpStatus.OK);
}

export default {
    sendMail
};