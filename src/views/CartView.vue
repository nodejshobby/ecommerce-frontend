<template>
    <div>
    <NavBar />
  <div class="container mt-4">
    <div class="row bg-light py-5 px-3 text-center rounded" v-if="getCartLength">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price(&#8358;)</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sub-total(&#8358;)</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem v-for="(cart,index) in carts" :key="index" :serial="index" :cart="cart"/>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"></td>
                        <td colspan="2"><b>Total: </b> &#8358;{{ total }}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="row bg-light py-5 px-3 text-center rounded" v-else>
        <h2>No products in the cart</h2>
        <div class="col-md-6 mx-auto">
            <a href="/" class="btn btn-primary mt-3">Go back home</a>
        </div>
    </div>
  </div>
    </div>
  
</template>

<script>
import CartItem from '../components/CartItem'
import NavBar from '../components/NavBar'

import Cart from '../utils/Cart'

export default {
data(){
    return {
        carts: '',
    }
},
created(){
    this.carts = Cart.getCart()
},
components: {
    CartItem,
    NavBar
},
computed: {
    getCartLength(){
        return this.carts.length > 0
    },
    total(){
        const carts = this.carts
        let total = 0
        carts.forEach((item)=>{
            total += item.price * item.quantity
        })
        return total
    },
    newKey(){
        return this.key
    }
}
}
</script>

<style>

</style>