mongo

db.contacts.find()

db.contacts.insert({"name":"frank","address":"345 soder st", "phone_number":"051-333333"})

db.contacts.find({"name":"frank"})

db.contacts.find({name:{$exists:true}})

db.contacts.insert({"name":"Jean","age":21,"address":"345 soder st", "phone_number":"051-333333"})
db.contacts.find({age:{$gte:21,$lt:31}})

db.contacts.find({"name":{$in:["frank","Jean"]}})

 db.contacts.find({"name":/^fra/})

 db.contacts.find().limit(5)

db.contacts.find().skip(5)

db.city.insert( {name:'dublin'} )

db.city.update( {name:'dublin'}, {name:'Dublin',county:'Dublin'} )

db.city.insert( {name:'Cork',county:'cork'} )

 db.city.update( {name:'Cork'}, {$set:{county:'Cork'}} )

db.counters.update( {name:'foo'}, {$inc:{value:1}}, true)
