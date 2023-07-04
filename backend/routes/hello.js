var express = require('express');
var helloRouter = express.Router();
//var names = [{id:1, name:'John'},{id:2, name:'Pedro'},{id:3, name:'Pablo'}
//];
names = {1: 'John', 2: 'Jane', 3: 'Jack'};
// Get all names
helloRouter.get('/', (req, res) => {
  res.json(names);
  console.log(names)
});

// Get a single name
helloRouter.get('/:id', (req, res) => {
//const aux = names.filter(elemento=>elemento.id==req.params.id)

  res.json(names[req.params.id]);
  console.log(names[req.params.id])
});


// Update a single name
helloRouter.put('/:id', (req, res, next) => {
  names[req.params.id] = req.body.name;
  res.json(names[req.params.id]);
  console.log(names);
});

// Add a new name
helloRouter.post('/', (req, res) => {
  names[req.body.id] = req.body.name;
  res.json(names[req.body.id]);
  console.log(names);
});

// Delete a name
helloRouter.delete('/:id', (req, res) => {
  delete names[req.params.id];
  res.json(names);
  console.log(names);
});

module.exports = helloRouter;

 