const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClaseParticular = mongoose.model('ClaseParticular');

const CalendarioSchema = new Schema({
  día: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  claseParticular: { type: Schema.ObjectId, ref: "ClaseParticular" }
});

module.exports = mongoose.model('Calendario', CalendarioSchema);
