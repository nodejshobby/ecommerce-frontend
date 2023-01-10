<template>
  <tr>
    <th scope="row">{{ serial + 1}}</th>
    <td>{{ cart.title }}</td>
    <td>{{ cart.price }}</td>
    <td><input type="number" class="form-control input-sm" @change="updateQuantity" :data-id="cart.product_id" :value="cart.quantity"></td>
    <td> {{ cart.price * cart.quantity }}</td>    
    <td><button class="btn btn-danger" @click.prevent="deleteItem(cart.product_id)"><i class="fa fa-trash"></i></button></td>
  </tr>
</template>

<script>
import Cart from '../utils/Cart'
export default {
    props: ['cart','serial'],
    methods: {
      deleteItem(id){
        confirm("Are you sure you want to remove this Item?")
        Cart.deleteCartItem(id)
        this.$toast.success("Item deleted successfully",{position: 'top-right'})
        window.location.reload()
      },
      updateQuantity(e){
        if(e.target.value && e.target.value > 0 ){
          Cart.updateItemQuantity(e.target.getAttribute('data-id'),e.target.value)
          this.$toast.success("Item updated successfully",{position: 'top-right'})
          window.location.reload()
        }else{
          this.$toast.error("Invalid unit input",{position: 'top-right'})
        }
        
      }
    }
}
</script>

<style>

</style>