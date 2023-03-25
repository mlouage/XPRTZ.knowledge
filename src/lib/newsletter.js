import sgMail from '@sendgrid/mail';

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function subscribeToNewsletter(email) {
  const msg = {
    to: 'maarten@xprtz.net',
    from: 'maarten@xprtz.net',
    subject: 'Nieuwe aanmelding voor een kennisavond',
    text: `${email} heeft zich ingeschreven op de kennis website. Neem contact op met deze persoon.`,
    html: `<p><strong>${email}</strong> heeft zich ingeschreven op de kennis website. Neem contact op met deze persoon.</p>`,
  };

  // Send email using the SendGrid API
  try {
    const response = await sgMail.send(msg);
    console.log('Message sent:', response);
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
}

export { subscribeToNewsletter };
