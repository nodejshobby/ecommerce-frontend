<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 mx-auto mt-5">
            <div class="card rounded bg-light p-4">
                <h1 class="text-center">Login Form</h1>
                <div class="card-body">
                    <form action="">
                        <div class="form-group mb-3">
                            <input type="email" name="email" v-model="form.email"  class="form-control" placeholder="Enter your email">
                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Enter your pasword">
                            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                        </div>
                        <div class="text-center">
                            <button type="submit" @click.prevent="Login" class="btn btn-primary py-2 px-3">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Auth from '../apis/Auth'
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            form: {
                email: '',
                password: ''
            },
            errors: {

            }
        } 
    },
    methods: {
        ...mapActions(['changeAuth']),
        async Login(){
             try{
                const response = await Auth.Login(this.form)
                if(response.status == 200){
                    this.$toast.success("Login was successful",{position: "top-right"})
                    localStorage.setItem('token',response.data)
                    this.changeAuth(true)
                    setTimeout(()=>{
                        this.$router.push({ name: 'home' })
                    },2000)
                }
            }catch(error){
                if(error.response.status == 422){
                    this.errors = error.response.data.errors
                    this.$toast.error("Data validation error",{position: "top-right"})
                }else{
                    console.log(error.message)
                }
            }
        }
    }
}
</script>

<style>

</style>