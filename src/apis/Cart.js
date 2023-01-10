import Api from './Api'

const cartUri = "/carts"

class Cart {
    
    static async insertCart(payload) {
        const carts = await Api.post(cartUri, payload);
        return carts;
    }

    static async getUserCart(){
        const carts = await Api.get(cartUri)
        return carts
    }

    static async getUserCartCount(){
        const carts = await Api.get(`${cartUri}?count=true`)
        return carts
    }
}

export default Cart