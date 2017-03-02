//Commands for mongo shell....

//insert and creates collection if not there already.
db.contacts.insert({name:'Joe Bloggs', Address:'Ireland'})

//check mongolab
db.contacts.find( {name:'Joe Bloggs'})

//insert new object. Different structure...
db.contacts.insert({ Address:'Ireland'})

//find all contacts that have a name property
db.contacts.find( {name:{$exists:true}})

//Update
db.contacts.insert( {name:'Davy Jones', address:'Waterford',phone_number:'051-112233'} )
db.contacts.update( {name:'Davy Jones'}, {name:'Davy Power',address:'Waterford',phone_number:'051-112233'})
db.contacts.update( {name:'Davy Power'}, {name:'Davy Power',address:'Waterford',phone_number:'051-112233',age:12})

//Query 
db.contacts.find( {age:{$gte:12}})

//increment
db.contacts.update( {name:'Davy Power'},{$set:{counter:3}})
db.contacts.update( {name:'Davy Power'},{$inc:{counter:2}})
db.contacts.find( {name:'Davy Power'})