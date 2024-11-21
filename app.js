const express = require('express'); 
const app = express();              
const path = require('path');       
let items = ['Item 1', 'Item 2'];  
app.use(express.json());            
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'API.html'));
});
app.get('/items', (req, res) => {
  res.json(items);  
});
app.post('/items', (req, res) => {
  const newItem = req.body.name; 
  items.push(newItem);            
  res.json({ message: 'Item added', items }); 
});
app.delete('/items/:index', (req, res) => {
  const index = req.params.index;  
  items.splice(index, 1);          
  res.json({ message: 'Item deleted', items }); 
});
app.listen(3002, () => {
  console.log('Server running at http://localhost:3002');
});
