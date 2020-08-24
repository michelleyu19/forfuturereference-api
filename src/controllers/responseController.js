import Response from '../models/response';

export const createResponse = (req, res) => {
  console.log('HERE');
  const response = new Response();
  response.senderEmail = req.body.senderEmail;
  response.recipientEmails = req.body.recipientEmails;
  response.reflectionText = req.body.reflectionText;
  response.creationDate = new Date();
  response.sendDate = req.body.sendDate;
  // store it
  response.save()
    .then((result) => {
      res.json({ message: 'Response saved!' });
    })
    .catch((error) => {
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
