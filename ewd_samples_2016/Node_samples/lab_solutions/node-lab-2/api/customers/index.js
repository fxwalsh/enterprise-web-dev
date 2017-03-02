var datastore = require('./datastore');
var shortId = require('shortid');
  
//  curl -H "Content-Type: application/json" -d '{"name":"Jane Fleming","address":"1 High St", "phone": "321-45678"}' http://localhost:4000/api/contacts
// curl -X PUT -H "Content-Type: application/json" -d '{"name":"Jane Fleming-Murphy","address":"1 High St", "phone": "321-45678"}' http://localhost:4000/api/contacts/2


// Get list of contacts
module.exports = function(app){


  app.get('/api/customers',function(req, res) {
  return res.status(200).json(datastore.customers);
   });

  app.post('/api/customers',function(req, res) {
    var customer = {
       id: shortId.generate(),
       name: req.body.name,
       address: req.body.address,
       phone_number: req.body.phone_number 
    };
    datastore.customers.push(customer)
    return res.status(201).json(customer);
});

// Update an existing customer in datastore.
app.put('/api/customers/:id',function(req, res) {
    var index = datastore.customers.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var customer = datastore.customers[index];
       customer.name =  req.body.name;
       customer.address = req.body.address;
       customer.phone_number = req.body.phone_number
       return res.status(200).json(customer);
    } else {
        return res.status(404).send("Customer not found");
    }
});

// delete an existing customer in datastore.
app.delete('/api/customers/:id',function(req, res) {
    var index = datastore.customers.map(function(x) {return x.id; }).indexOf(req.params.id);
    if (index != -1) {
       var customer = datastore.customers.splice(index,1);
       return res.status(200).json(customer);
    } else {
        return res.status(404).send("Customer not found.");
    }
});


}


