import express from 'express';
import Mail from '../Controller/mail.js';

const router = express.Router();

router.post('/send', Mail.sendMail);

export default router;