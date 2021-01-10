/* eslint func-names: 0 */
import mongoose, { Schema } from 'mongoose';

const responseSchema = new Schema({
  addresseeName: { type: String },
  authorName: { type: String },
  senderFirstName: { type: String },
  senderLastName: { type: String },
  senderEmail: {
    type: String,
    lowercase: true,
  },
  recipientEmails: { type: Array },
  reflectionText: { type: Array },
  creationDate: { type: Date },
  sendDate: { type: Date },
  responseType: { type: String },
  verified: { type: Boolean },
}, { runSettersOnQuery: true }, {
  toJSON: {
    virtuals: true,
  },
});

// create ResponseModel class from schema
const ResponseModel = mongoose.model('Response', responseSchema);

export default ResponseModel;
