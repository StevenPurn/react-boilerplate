const mongoose = require('mongoose');
const db = require('./mongo');

const sampleRecords = [{
  id: 0,
  text: 'lorem ipsum',
},
{
  id: 1,
  text: 'test item 1',
}];

const seedData = (records) => {
  db.addRecords(records)
    .then(() => {
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log(err);
      mongoose.disconnect();
    });
};

seedData(sampleRecords);
