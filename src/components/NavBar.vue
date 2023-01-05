<template>
  <nav class="navbar navbar-expand-lg bg-light py-md-2 px-md-3">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="/">Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item" v-if="!this.auth">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item" v-if="!this.auth">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item" v-if="auth">
          <a class="nav-link" @click.prevent="Logout" href="#">Logout</a>
        </li>
         <li class="nav-item mt-2 mt-lg-0 ms-lg-2">
          <a class="btn btn-secondary text-white" href="/cart"><i class="fas fa-cart-arrow-down me-1"></i> <b>{{ getCartCount  }}</b> Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import Auth from '../apis/Auth'
import { mapState, mapActions } from 'vuex'
import Cart from '../utils/Cart'
export default {
name: "NavBar",
computed: {
  ...mapState(['auth']),
  getCartCount(){
    return Cart.getCartCount()
  }
},
methods: {
  ...mapActions(['changeAuth']),
  async Logout(){
    try{
      await Auth.Logout()
      this.changeAuth(false)
      this.$router.push({ name: "home" })
    }catch(error){
      console.log(error)
    }
  }
}
}
</script>

<style>

</style>