var express = require('express');
var router = express.Router();

const ProductController = require('../controller/ProductController');
const CategoryController = require('../controller/CategoryController');
const paypal = require('paypal-rest-sdk');
const { upload, uploadToCloudinary } = require('../middleware/CloudinaryUpload');


/** chạy trên web
 * Hiển thị trang danh sách sản phẩm 
 * http://localhost:3000/product/  */
router.get('/', async function (req, res, next) {
    let products = await ProductController.get();
    products = products.map((p, index) => {
       
        return {
            _id: p._id,
            code: p.code,
            name: p.name,
            author: p.author,
            titledescription: p.titledescription,
            description: p.description,
            countryside: p.countryside,
            processingplace: p.processingplace,
            size: p.size,
            weight: p.weight,
            image: p.image,
            price: p.price,
            discount: p.discount,
            quantity: p.quantity,
            favorite: p.favorite,
            isFutured: p.isFutured,
            dateCreated: p.dateCreated,
            categoryId: p.categoryId,
            color: p.color,
            index: index + 1,
        }
    });
    
    res.render('web/san-pham', { sp: products });
    // res.status(200).json(products);
    // console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", products)
});

async function getProductsForTemplate() {
    try {
        let products = await ProductController.get();
        products = products.map((p, index) => {
            return {
                _id: p._id,
                code: p.code,
                name: p.name,
                author: p.author,
                titledescription: p.titledescription,
                description: p.description,
                countryside: p.countryside,
                processingplace: p.processingplace,
                size: p.size,
                weight: p.weight,
                image: p.image,
                price: p.price,
                discount: p.discount,
                quantity: p.quantity,
                favorite: p.favorite,
                isFutured: p.isFutured,
                dateCreated: p.dateCreated,
                categoryId: p.categoryId,
                color: p.color,
                index: index + 1,
            };
        });
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Trả về một mảng rỗng nếu có lỗi
    }
}


router.get('/cpanel/products', async function (req, res, next) {
    try {
        const productsForTemplate = await getProductsForTemplate();
       
    } catch (error) {
        console.error("Error rendering hbs template:", error);
        res.status(500).send("Internal Server Error");
    }
});


//thêm sản phẩm yêu thích
//http://localhost:3000/product/favorite
router.post(':id/favorite/', async function (req, res, next) {
    try {
        let { id } = req.params;
        await ProductController.favourite(id);
        res.json({ status: true });
        console.log("🚀 ~ file: product.js:74 ~ id:", id);
    } catch (error) {
        res.json({ status: false });
        console.log("🚀 ~ file: product.js:79 ~ error", error);
    }
});
//search sản phẩm
//http://localhost:3000/product/search

router.get('/search', async (req, res) => {
    const keyword = req.query.keyword;
  
    // Gọi hàm xử lý tìm kiếm từ service hoặc controller
    const results = await ProductController.searchProducts(keyword);
  
    res.json(results);
});


//hiển thị sản phẩm yêu thích vừa thêm
//http://localhost:3000/product/:id/favorite
router.get('/:id/favorite', async function (req, res, next) {
    try {
        let { id } = req.params;
        let product = await ProductController.getOne(id);
        res.json(product);
        console.log("🚀 ~ file: product.js:74 ~ id:", id)
    } catch (error) {
        res.json({ status: false });
        console.log("🚀 ~ file: product.js:79 ~ error", error)
    }
});


/* Hiển thị sản phẩm nổi bật  */
//http://localhost:3000/product/featured/:count
router.get('/featured/:count', async function (req, res, next) {
    let { count } = req.params;
    let featuredProducts = await ProductController.get({ isFeatured: true });
    let products = featuredProducts.slice(0, count);
    products = products.map((p, index) => {
        const price = p.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return {
            _id: p._id,
            code: p.code,
            name: p.name,
            description: p.description,
            countryside: p.countryside,
            processingplace: p.processingplace,
            size: p.size,
            weight: p.weight,
            image: p.image,
            price: price,
            quantity: p.quantity,
            favorite: p.favorite,
            isFutured: p.isFutured,
            dateCreated: p.isFutured,
            categoryId: p.categoryId,
            index: index + 1,
        }
    });
    
    console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", products)
    res.status(200).json(products);
});

/**
 * xóa sản phẩm
 */
//http://localhost:3000:/product/:id
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await ProductController.remove(id);
        console.log("🚀 ~ file: product.js:74 ~ id:", id)
        res.json({ status: true });
    } catch (error) {
        res.json({ status: false });
        console.log("🚀 ~ file: product.js:79 ~ error", error)
    }
});

/**
 * Hiển thị trang chi tiết sản phẩm 
 * http://localhost:3000/product/:id/detail
 */
router.get('/:id/detail', async function (req, res, next) {
    try {
        let { id } = req.params;
        const product = await ProductController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == product.categoryId._id.toString(),
            }
        });
        // res.render('products/chinh-sua', { product, categories });
        res.status(200).json({ product, categories });
        console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", product)
    } catch (error) {
        next(error);
    }
});


/**
 * Hiển thị cập nhật sản phẩm
 * https://localhost:3000/product/:id/detail
 */
router.post('/:id/detail', upload.single('image'), async function (req, res, next) {
    try {
        let { file } = req;
        let { code, name,author,titledescription, description, countryside, processingplace, size, weight, image, price, quantity, favorite,isFutured,dateCreated,categoryId } = req.body;
        let { id } = req.params;
        if (file) {
            const imageUrl = await uploadToCloudinary(file);
            // Lưu đường dẫn imageUrl vào cơ sở dữ liệu
            image = imageUrl;
        }
        await ProductController.update(id,code, name, author,titledescription,description, countryside, processingplace, size, weight, image, price, quantity, favorite,isFutured,dateCreated,categoryId);
        res.redirect('/product');
        console.log(req.body);
        // res.status(200).json(products);
    } catch (error) {
        console.log(error);
        next(error);
    }
});



router.get('/cancel', function (req, res, next) {
    res.send('cancel');
    console.log("🚀 ~ file: product.js:210 ~ req", req)
});
router.get('/cpanel/index', function (req, res, next) {
    res.render('web/index',{layout:'layout/main.hbs'});
    console.log("🚀 ~ file: product.js:210 ~ req", req)
});
router.get('/cpanel/table', function (req, res, next) {
    res.render('web/ListOrder',{layout:'layout/main.hbs'});
    console.log("🚀 ~ file: product.js:210 ~ req", req)
});

/* GET home page. */
/*Hiển thị trang tạo mới sản phẩm*/
//http://localhost:3000/product/tao-moi
router.get('/tao-moi', async function (req, res, next) {
    let categories = await CategoryController.get();
    categories = categories.map((p, index) => {
        return {
            _id: p._id,
            name: p.name,
        }
    });
    console.log("🚀 ~ file: product.js:32 ~ products=products.map ~ products:", categories)
    res.render('products/tao-moi', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/product/tao-moi
 */
router.post('/tao-moi', upload.single('image'), async function (req, res, next) {
    try {
        let { file } = req;
        let {id,code, name,author,titledescription, description, countryside, processingplace, size, weight, image, price,discount, quantity, favorite,isFutured,dateCreated,categoryId} = req.body;
        if (file) {
            const imageUrl = await uploadToCloudinary(file);
            // Lưu đường dẫn imageUrl vào cơ sở dữ liệu
            image = imageUrl;
        }
        await ProductController.create(code, name,author,titledescription, description, countryside, processingplace, size, weight, image, price,discount, quantity, favorite,isFutured,dateCreated,categoryId);
        res.redirect('/product');
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = router;
