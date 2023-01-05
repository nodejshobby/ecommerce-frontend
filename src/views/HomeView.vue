<template>
    <div>
        <div class="container-lg my-4 px-4 px-md-5 px-lg-0">
            <div class="row g-4 g-lg-5 justify-content-center align-items-center">
                <div class="col-md-6 col-lg-4" v-for="product in products" :key="product.id">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import ProductCard from '../components/ProductCard'

import Product from '../apis/Product'

export default {
    data(){
        return {
            products: [],
        }
    },
    components: {
        ProductCard,
    },
    async created(){
        try {
            const response  = await Product.getAllProduct();
            this.products = response.data
        } catch (error) {
            console.log(error.message)
        }
    }

}
</script>

<style>

</style>