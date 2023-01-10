<template>
  <div class="card shadow">
  <img :src="product.image" class="card-img-top height-control" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bold">{{ product.title }}</h5>
    <p class="card-text product-description text-truncate">{{ product.description }}</p>
    <div class="d-flex align-items-center">
        <p class="fw-bold price">&#8358;{{ product.price }}</p>
        <a href="#" @click.prevent="addToCart(product,1)" class="btn btn-primary ms-auto"><i class="fas fa-cart-plus"></i> Add to cart</a>
    </div>
  </div>
</div>
</template>

<script>
import Cart  from '../utils/Cart'
export default {
    name: "ProductCard",
    props: ['product'],
    methods: {
      addToCart(product,quantity){
        Cart.setCart({
          'product_id': product.id,
          'title': product.title,
          'price': product.price,
          'quantity': quantity
        })
        this.$toast.success("Product added to cart",{position: 'top-right'})
        this.$emit('rerender')
      }
    }
}
</script>

<style scoped>
  .price {
    font-size: 1.3rem;
  }
  .height-control {
    height: 300px;
  }
</style>