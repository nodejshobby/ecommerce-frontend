import Api from './Api'

const productUri = "/products"

class Product {
    
    static async getAllProduct() {
        const products = await Api.get(productUri);
        return products;
    }
}

export default Product