//dummy data to return something for dogs
var dogs=[ 
   {id: 0, name: "Rover", breed: "Labrador", age: 2},
   {id: 1, name: "Rex", breed: "Pug", age: 3}
]


module.exports = function(app){
 app.get('/dogs', function(req, res){
	res.json(200,dogs);
});

 app.post('/dogs', function(req, res){
	res.json(200,dogs);
});
}