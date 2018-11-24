import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FlixSchema = new Schema({
  provider: {
    type: String,
    required: 'Enter a provider: { Netflix, Amazon }.'
  },
  name: {
    type: String,
    required: 'Enter a name: { Parks and Recreation }.'
  },
  type: {
    type: String,
    required: 'Enter a type: { Movie, Series }.'
  },
  todo: {
    type: Boolean,
    default: false
  }
});
