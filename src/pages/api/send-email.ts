import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const firstName = typeof req.query.firstName === 'string' ? req.query.firstName : ''
    const lastName = req.query.lastName

    try {
        const data = await resend.emails.send({
            from: 'Camacode <sales@theblackbird.it>',
            to: ['nicolo.merlini@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName }),
            text: ''
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}