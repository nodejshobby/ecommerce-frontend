const Cart = {
    getCart: ()=>{
        return JSON.parse(localStorage.getItem('cart')) || []
    },
    setCart: (payload) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []

        const findProduct = cart.find((item)=>{
            return item.product_id === payload.product_id
        })
        if(!findProduct){
            if(cart.length > 0){
                cart.push(payload)
                localStorage.setItem('cart',JSON.stringify(cart))
            }else{
                cart = []
                cart.push(payload)
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }else {
            findProduct.quantity++

            const otherCartItem = cart.filter((item)=>{
                return item.product_id !== payload.product_id
            }) 
            const newCart = [...otherCartItem, findProduct]
            localStorage.setItem('cart',JSON.stringify(newCart))
        }
        
    },
    getCartCount: ()=>{
        const carts = JSON.parse(localStorage.getItem('cart')) || []
        return carts.length
    },
    deleteCartItem: (id)=>{
        const carts = JSON.parse(localStorage.getItem('cart')) || []
        const otherCartItem = carts.filter((item)=>{
            return item.product_id !== id
        }) 
        localStorage.setItem('cart',JSON.stringify(otherCartItem))
    },
    updateItemQuantity: (id,quantity)=>{
        const carts = JSON.parse(localStorage.getItem('cart')) || []
        const findProduct = carts.find((item)=>{
            return item.product_id == id
        })
        findProduct.quantity = quantity
        const otherCartItem = carts.filter((item)=>{
            return item.product_id != id
        }) 
        const newCart = [findProduct,...otherCartItem] 
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
} 

export default Cart