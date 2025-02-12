// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//     to: email,
//     from: "kizzy@shapedservices.com", // Use the email address or domain you verified above
//     subject: "Sending with Twilio SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: `<strong>Hi, ${name} and easy to do anywhere, even with Node.js</strong>`,
//   };

// //ES6
// sgMail
//   .send(msg)
//   .then(() => {}, (error: any) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
// //ES8
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);

//     if ((error as any)?.response) {
//       console.error((error as any).response?.body)
//     }
//   }
// })();