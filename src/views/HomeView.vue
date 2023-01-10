<template>
    <div>
        <NavBar :key="newKey" />

        <div class="container-lg my-4 px-4 px-md-5 px-lg-0">
            <div class="row g-4 g-lg-5 justify-content-center align-items-center">
                <div class="col-md-6 col-lg-4" v-for="product in products" :key="product.id">
                    <ProductCard :product="product" @rerender.once="reCalculateKey"/>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import ProductCard from '../components/ProductCard'
import NavBar from '../components/NavBar'

import Product from '../apis/Product'



export default {
    data(){
        return {
            products: [],
            key: 0
        }
    },
    computed:{
        newKey(){
            return this.key
        }
    },
    methods:{
        reCalculateKey(){
            this.key += 1
        }
    },
    components: {
        ProductCard,
        NavBar
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