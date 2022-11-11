import mailService from '../Service/MailService.js';
import httpStatus from 'http-status-codes';

const sendMail = async (req, res) => {
    const {to, subject, text, html} = req.body;

    const status = await mailService(to, subject, text, html);
    return (status) ? res.sendStatus(httpStatus.OK) : res.sendStatus(httpStatus.BAD_REQUEST);
}

export default {
    sendMail
};