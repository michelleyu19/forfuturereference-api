// import User from '../models/user_model';
import Response from '../models/response';

// const TEMP_ERROR_CODE = 300;
const sendReflection = require('gmail-send')({
  // var send = require('../index.js')({
  user: 'info.forfuturereference@gmail.com',
  pass: 'smores!321',
  to: 'yu.michelle97@gmail.com',
  // you also may set array of recipients:
  // [ 'user1@gmail.com', 'user2@gmail.com' ]
  // from:    credentials.user,            // from: by default equals to user
  // replyTo: credentials.user,            // replyTo: by default undefined
  // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
  subject: 'From your past self',
  text: 'Good news! You have been matched!', // Plain text
  // html:    '<b>html text</b>'            // HTML
});

// const emailCheck = require('email-check');
const sendVerification = require('gmail-send')({
  user: 'info.forfuturereference@gmail.com',
  pass: 'smores!321',
  to: 'yu.michelle97@gmail.com',
  subject: 'Verify your For Future Reference email',
  text: 'Click the link below to verify your email and get started!', // Plain text
});

export const sendReflectionEmail = (req, res) => {
  Response.findOne({ _id: req.params.id }, (err, response) => {
    if (err || !response) {
      console.log('error');
      return res.status(500).send(err);
    }
    if (response.verified) {
      let responseBody = '';
      // lay out question answer format
      response.reflectionText.forEach((element) => {
        responseBody = responseBody.concat(`<p>${element.question}<br> ${element.answer} <br></p>`);
      });
      sendReflection({
        to: response.senderEmail,
        text: `Dear ${response.senderName}, here's what you wrote on ${response.creationDate}`,
        html: responseBody,
      });
      return res.status(200).send('Your response has been sent!');
    } else {
      return res.status(400).send('Sorry this email is not verified');
    }
  });
};

export const sendVerificationEmail = (req, res) => {
  sendVerification({
    to: [req.senderEmail],
    text: `Hi ${req.senderFirstName}! We've saved your note for future reference! Click on or copy the link below into your browser to verify your email, and we'll schedule your note for future reference! \
    \n https://for-future-reference.herokuapp.com/api/verify/${req._id}`,
  });
  console.log('sent Verification');
};

export const verifyResponse = (req, res) => {
  Response.findOne({ _id: req.params.id }, (err, response) => {
    if (err || !response) {
      console.log('error');
      return res.status(500).send(err);
    }
    response.verified = true;
    response.save()
      .then((result) => {
        res.send('Thanks, you\'ve been verified!');
      }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
    return response;
  });
};
