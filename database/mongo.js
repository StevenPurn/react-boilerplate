const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/records';

mongoose.connect(mongoUri);

const recordSchema = new mongoose.Schema({
  id: Number,
  text: String,
});

const Record = mongoose.model('Record', recordSchema);

const addRecord = (record) => {
  const newRec = new Record(record);
  return newRec.save();
};

const addRecords = (records) => Record.insertMany(records);

const getRecords = () => Record.find();

const getRecord = (text) => Record.find({ text });

const clearDb = () => Record.remove({});

module.exports = {
  Record,
  addRecord,
  addRecords,
  getRecord,
  getRecords,
  clearDb,
};
