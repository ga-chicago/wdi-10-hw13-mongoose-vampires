// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires.js');

// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/vampires',{useMongoClient: true});

// 4. Open your mongoose connection
mongoose.connection.once('open', ()=>{
	console.log('mongoose connected');
})
mongoose.connection.on('disconnected', () => {
	console.log('disconnected mongoose');
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data");
//     mongoose.connection.close();
// });

// ### Add some new vampire data
// Vampire.create({
//   name: 'Count Sergio',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['coding','gaming'],
//   location: 'Chicago, Illinois, US',
//   gender: 'm',
//   victims: 100
// },(err,createdVamp) => {
// 	console.log(createdVamp,'vamp1 added');
// })

// Vampire.create({
//   name: 'test vampy',
//   hair_color: 'green',
//   eye_color: 'purple',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['stuff','nothing'],
//   location: 'Chicago, Illinois, US',
//   gender: 'm',
//   victims: 1090
// },(err,createdVamp) => {
// 	console.log(createdVamp,'2');
// })

// Vampire.create({
//   name: 'Emma',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['school','tv'],
//   location: 'Chicago, Illinois, US',
//   gender: 'f',
//   victims: 1020
// },(err,createdVamp) => {
// 	console.log(createdVamp, '3');
// })

// Vampire.create({
//   name: 'Jasmine',
//   hair_color: 'black',
//   eye_color: 'red',
//   dob: new Date(1988, 2, 13, 7, 47),
//   loves: ['stuff','make-up'],
//   location: 'Chicago, Illinois, US',
//   gender: 'f',
//   victims: 1400
// },(err,createdVamp) => {
// 	console.log(createdVamp,'vamp4 added');
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: 'f'},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $gt: 500 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $lte: 150 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $ne: 210234 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{victims: { $gt: 150 }},{victims: { $lt: 500 }}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title:{$exists: true}},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims:{$exists: false}},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{title:{$exists: true}},{victims:{$exists: false}}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{victims:{$exists: true}},{victims:{$gt: 1000}}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({$or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{loves:'brooding'},{loves:'being tragic'}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{loves:'marshmallows'},{victims:{$gt: 1000}}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{hair_color:'red'},{eye_color:"green"}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find({$or:[{loves:'frilly collars'},{loves:'frilly shirtsleeves'}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({loves:'brooding'},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$or:[{loves:'R&B music'},{loves:'appearing innocent'},{loves:'trickery'},{loves:'lurking in rotting mansions'}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({$and:[{loves:'fancy cloaks'},{loves:{ $nin: [ 'top hats', 'virgin blood' ] }}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({$and:[{loves:'ribbons'},{eye_color:{ $nin: 'brown' }}]},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({ location: {$not : /^Rome/} },(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({loves: { $nin: [ 'fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding' ] }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

// Vampire.find({victims: { $lte: 200 }},(err,foundVamps) => {
// 	console.log(foundVamps);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampire.collection.findOneAndReplace(
//    { name : 'Claudia' },
//    { "name" : "Eve", "portrayed_by" : 'Tilda Swinton' }
// )

// Vampire.collection.findOneAndReplace(
//    { gender : 'm' },
//    { "name" : "Guy Man", "is_actually" : 'were-lizard' }
// )

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Vampire.findOneAndUpdate(
// 	{ name: 'Guy Man' }, 
// 	{ $set: { gender: 'f' } }, 
// 	{ new : true }, 
// 	(err, updated)=>{
// 		console.log(updated);
// 		mongoose.connection.close();
// 	}
// );

// Vampire.findOneAndUpdate(
// 	{ name: 'Eve' }, 
// 	{ $set: { gender: 'm' } }, 
// 	{ new : true }, 
// 	(err, updated)=>{
// 		console.log(updated);
// 		mongoose.connection.close();
// 	}
// );

// Vampire.collection.findOneAndReplace(
//    { name : 'Guy Man' },
//    { "name" : "Guy Man", "hates" : ["Clothes","jobs"]}
// )

// Vampire.collection.findOneAndReplace(
//    { name : 'Guy Man' },
//    { "name" : "Guy Man", "hates" : ["Clothes","jobs","jackalopes","alarm clocks"]}
// )


// Vampire.findOneAndUpdate(
//   	{ name: 'Eve'},
//   	{ $set: {name : 'moniker'} },
//   	{ new : true},
//   	(err, updatedVamp) => {
//   		console.log(updatedVamp);
// 			mongoose.connection.close();
//   	}
// )

// Vampire.update(
//  	{ gender: 'f'},
//   	{ $set: { gender: 'fems'} },
//  	{ multi: true },
//  	(err, updatedVamps) => {
//  		console.log(updatedVamps);
// 			mongoose.connection.close();
//  	}
// )

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Vampire.findOneAndRemove(
//  	{hair_color: 'brown'},
//  	(err, vampire)=> {
//  		mongoose.connection.close();
//   	}
// )

// Vampire.remove(
//  	{eye_color: 'blue'},
//  	(err, vampire)=> {
// 			mongoose.connection.close();
//  	}
// )
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE "NOOOOOOOOOOO!"
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////