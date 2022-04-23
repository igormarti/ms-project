import ProductService from "../services/ProductService.js";

class ProductController {

    async store(req, res){
        try {
            await ProductService.saveProduct(req.body);
            return res.status(201).json({
                status:true,
                msg:"Product saved with success."
            })
        } catch (error){
            return res.status(500).json({
                status: false,
                msg: error.message
            })
        }
    }

    async show(req, res) {
        try {
            const {id} = req.params;

            const product = await ProductService.getProductByID(id);

            return res.status(201).json({
                status:true,
                product
            });
        } catch (error){
            return res.json({
                status: false,
                msg: error.message
            })
        }
    } 

    async all(req, res){
        try {
            const products = await ProductService.allProduct();
            console.log(products)
            return res.json({
                status:true,
                products: products
            })
        } catch (error){
            return res.status(500).json({
                status: false,
                msg: error.message
            })
        }
    }

}

export default new ProductController();