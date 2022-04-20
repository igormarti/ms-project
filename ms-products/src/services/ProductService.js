import Product from "../schemas/Product.js";

class ProductService {

    async saveProduct(product){
        const docProduct = new Product(product);
        return await docProduct.save();
    }

    async allProduct(){
        return await Product.find().select("id name price description")
    }
}

export default new ProductService();