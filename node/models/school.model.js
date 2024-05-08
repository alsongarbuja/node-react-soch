const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
}, { timestamps: true });

const SchoolModel = mongoose.model('School', SchoolSchema);
module.exports = SchoolModel;