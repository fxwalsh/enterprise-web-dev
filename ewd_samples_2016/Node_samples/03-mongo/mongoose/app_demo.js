var mongoose = require('mongoose')

mongoose.connect('mongodb://test:test@ds039311.mlab.com:39311/contacts_db');

var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name:{type:String, required:true},
	address:String,
	phone_number:String

});

var ContactModel = mongoose.model('contacts',ContactSchema);

//Find all 
ContactModel.find(function(err, contacts){
	if (err){
		console.log(err);
	}else{
		console.log("****** Finding All Contacts....");
		contacts.forEach(function(contact){
			console.log(contact.name);
		})
	}
});

// Create a new contact
var newContact = {
					address:'Cork Road',
					phone_number:'051-223344'};


ContactModel.create(newContact, function (err, contact) {
  if (err) {
  		console.log(err)
  	}else{;
  		console.log('Created new contact %s', contact.name);
  	}  
});


console.log("should see this first");

