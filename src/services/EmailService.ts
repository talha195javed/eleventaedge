import emailjs from '@emailjs/browser';

const sendEmail = async (formData: { name: string; email: string; title: string; message: string }) => {
    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your Service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your Template ID
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your Public Key
        );
        console.log('Email sent successfully:', response);
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export default sendEmail;
