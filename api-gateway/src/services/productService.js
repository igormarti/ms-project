import axios from 'axios';

class ProductService{

    async getProductByID(id){
        const resp = await axios.get(`http://ms-products:3001/products/${id}`);
        if(resp.data.length==0) throw new Error('Erro ao tentar processar o produto.');

        if(resp.data.status==false) throw new Error('Produto não encontrado.');

        return resp.data.product;
    }

}

export default new ProductService();