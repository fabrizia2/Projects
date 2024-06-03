const sgMail = require('@sendgrid/mail');

// Replace with your SendGrid API key
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    // Define email data
    const msg = {
      to: 'whitneyjuma330@gmail.com', // Recipient email
      cc: 'glamour@example.com', // CC email
      from: 'no-reply@lawfirm.com', // Sender email
      subject: 'New Contact Form Submission',
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
      html: `
        <strong>Name:</strong> ${data.name} <br>
        <strong>Email:</strong> ${data.email} <br>
        <strong>Message:</strong> ${data.message}
      `,
    };

    // Send email
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' }),
    };
  }
};
