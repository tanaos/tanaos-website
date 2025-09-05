import { axios } from './index';


export const sendEmail = async (senderEmailAddress, message) => {
    const response = await axios.post('/email/send', {
        'sender_email_address': senderEmailAddress,
        'message': message
    });
    return response.data;
};