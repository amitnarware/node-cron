// cronJob.js
const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Function to send the reminder email.
function sendReminderEmail(email) {
  const transporter = nodemailer.createTransport({
    // Replace with your email service provider details.
    service: 'gmail',
    auth: {
      user: 'amitnarware40@gmail.com', // Replace with your email address.
      pass: 'worzknxqorxxvoyw', // Replace with your email password or an app password.
    },
  });

  const mailOptions = {
    from: 'amitnarware40@gmail.com', // Replace with your email address.
    to: email,
    subject: 'Complete Your Registration before last date',
    text: 'Please complete your registration by clicking on the link provided.',
    // You can also use HTML content in the 'html' property for a more styled email.
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

// Function to simulate fetching users who haven't completed registration.
function getUnregisteredUsers() {
  // In a real application, you would fetch users from your database based on certain criteria.
  return [
    { email: 'soniishaan02@gmail.com' },
    { email: 'archana31dec@gmail.com' },
    // Add more user entries as needed.
  ];
}

// Schedule the cron job to run every day at 8:00 AM.
cron.schedule('56 16 * * *', () => {
  console.log('Cron job running...');
  const unregisteredUsers = getUnregisteredUsers();
  unregisteredUsers.forEach(user => {
    sendReminderEmail(user.email);
  });
});
