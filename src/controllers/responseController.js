import Response from '../models/response';
import * as Email from './emailController';

export const createResponse = (req, res) => {
  console.log('creating response');
  const response = new Response();
  response.senderEmail = req.body.senderEmail;
  response.senderName = req.body.senderName;
  response.recipientName = req.body.recipientName;
  response.recipientEmails = req.body.recipientEmails;
  response.reflectionText = req.body.reflectionText;
  response.creationDate = new Date();
  response.sendDate = req.body.sendDate;
  response.verified = false;
  // store it
  response.save()
    .then((result) => {
      console.log('created');
      console.log(result);
      Email.sendVerificationEmail(result);
      res.json(result._id);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
};

export const getResponse = (req, res) => {
  Response.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const deleteResponse = (req, res) => {
  Response.remove({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    }).catch((error) => {
      res.status(500).json({ error });
    });
};

export const updateResponse = (req, res) => {
  res.send('TODO: update functionality');
};
