const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/records';

mongoose.connect(mongoUri);

const recordSchema = new mongoose.Schema({
  id: Number,
  text: String,
});

const Record = mongoose.model('Record', recordSchema);

const addRecord = (record) => Record.insert(record);

const addRecords = (records) => Record.insertMany(records);

const getRecords = () => Record.find({});

const getRecord = (id) => Record.find({ id });

const clearDb = () => Record.remove({});

module.exports = {
  Record,
  addRecord,
  addRecords,
  getRecord,
  getRecords,
  clearDb,
};
