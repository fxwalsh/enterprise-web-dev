//dummy data to return something for dogs
var dogs=[ 
   {id: 0, name: "Rover", breed: "Labrador", age: 2},
   {id: 1, name: "Rex", breed: "Pug", age: 3}
]

exports.listAllDogs = function(req, res){
	res.json(200,dogs);
};