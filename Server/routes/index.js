var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('./../model/ProductModel');

//ket noi mongoose
mongoose.connect('mongodb+srv://nghia:nghia@cluster0.aa5ws9e.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{ 
  console.log('ket noi mongoDB xong')
}).catch(()=>{
   console.log(error)
})





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/123', function(req, res, next) {
  res.render('index', { title: 'nghia dep trai so 1' });
});

// router.post('/product', function(req, res, next) {
//   console.log(req.body);
//   res.send(req.body)
// });
// router.get('/products', async(req, res, next)=> {
//   Product.find({},(error, data)=>{
//     console.log('danh sach san pham',data);
//   });
// });


//tim theo id
router.get('/product/:id', async(req, res, next)=> {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});


//them moi
router.post('/products', async(req, res, next)=> {
  try {
    const products = await Product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});

//sua
router.put('/products/:id', async(req, res, next)=> {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    if(!product)
    {
      return res.status(404).json({message:'khong tim dc san pham nao` co ID : ${id}'});
    }
    //cap nhat lai them 1 lan nua
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});

//xoa

router.delete('/products/:id',async(req,res,next)=>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    if(!product)
    {
      return res.status(404).json({message:'khong tim thay san pham can xoa voi ID :{id}'})
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
});
module.exports = router;












// [{
//   "id": 1,
//   "name": "Barrett Eggleston",
//   "price": 18,
//   "quantity": 83,
//   "description": "Spain",
//   "image": "http://dummyimage.com/117x100.png/cc0000/ffffff",
//   "status": null
// }, {
//   "id": 2,
//   "name": "Ragnar Scoble",
//   "price": 14,
//   "quantity": 29,
//   "description": "Philippines",
//   "image": "http://dummyimage.com/103x100.png/5fa2dd/ffffff",
//   "status": null
// }, {
//   "id": 3,
//   "name": "Del Gathercole",
//   "price": 72,
//   "quantity": 97,
//   "description": "Canada",
//   "image": "http://dummyimage.com/113x100.png/dddddd/000000",
//   "status": null
// }, {
//   "id": 4,
//   "name": "Tiffy Kuhle",
//   "price": 45,
//   "quantity": 49,
//   "description": "Philippines",
//   "image": "http://dummyimage.com/148x100.png/dddddd/000000",
//   "status": null
// }, {
//   "id": 5,
//   "name": "Bethany Dietmar",
//   "price": 92,
//   "quantity": 93,
//   "description": "China",
//   "image": "http://dummyimage.com/159x100.png/dddddd/000000",
//   "status": null
// }]
