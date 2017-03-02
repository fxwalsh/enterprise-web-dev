var mongoose = require('mongoose')

mongoose.connect('mongodb://test:test@ds039311.mlab.com:39311/contacts_db');

var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name:String,
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
var newContact = {name:'John Grisham',
					address:'Cork Road',
					phone_number:'051-223344'};
ContactModel.create(newContact, function (err, contact) {
  if (err) {
  		console.log(err)
  	}else{;
  		console.log('Created new contact %s', contact.name);
  	}  
});

// find a contact with aname matching 'Joe Bloggs', selecting the `name` and `occupation` fields
ContactModel.findOne({ 'name': 'John Grisham' }, 'name phone_number', function (err, contact) {
  if (err) return handleError(err);
  console.log("****** Found All Joe Bloggs....");
  console.log('Call %s on %s.', contact.name, contact.phone_number) 
});

// Update a document
ContactModel.findOne({name:'John Grisham'}, function (err, contact) {
  if (err) {
  		console.log(err)
  	}else{
  		contact.address='Yellow Road';
  		contact.save(function(err){
  			if (err){
  				console.log(err)
  			}else{
  				console.log('Address updated for contact %s', contact.name);
  			}
  	})  
}});



