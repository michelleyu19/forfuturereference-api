/* eslint func-names: 0 */
import mongoose, { Schema } from 'mongoose';

const responseSchema = new Schema({
  senderName: { type: String },
  recipientName: { type: String },
  senderEmail: {
    type: String,
    lowercase: true,
  },
  recipientEmails: { type: Array },
  reflectionText: { type: Array },
  creationDate: { type: Date },
  sendDate: { type: Date },
  verified: { type: Boolean },
}, { runSettersOnQuery: true }, {
  toJSON: {
    virtuals: true,
  },
});

// create ResponseModel class from schema
const ResponseModel = mongoose.model('Response', responseSchema);

export default ResponseModel;
