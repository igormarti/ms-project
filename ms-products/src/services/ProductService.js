import Product from "../schemas/Product.js";

class ProductService {

    async saveProduct(product){
        const docProduct = new Product(product);
        return await docProduct.save();
    }

    async getProductByID(id){
        const product = await Product.findById(id);

        if(!product) throw new Error("Product not found");

        return {
            id: product._id,
            name: product.name,
            price: product.price
        }
    }

    async allProduct(){
        return await Product.find().select("id name price description")
    }
}

export default new ProductService();