const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    default: "Not Provided",
  },
  location: {
      type: Map,
      of: String,
      required: true,
  }
});

const Incident = mongoose.model("Incident", IncidentSchema);
module.exports = Incident;