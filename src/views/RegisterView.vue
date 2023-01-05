<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 mx-auto mt-5">
            <div class="card rounded bg-light p-4">
                <h1 class="text-center">Register Form</h1>
                <div class="card-body">
                    <form action="">
                        <div class="form-group mb-3">
                            <input type="text" name="name" v-model="form.name" class="form-control" placeholder="Enter your name">
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <input type="email" name="email" v-model="form.email" class="form-control" placeholder="Enter your email">
                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Enter your pasword">
                            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <input type="password" name="password_confirmation" v-model="form.password_confirmation" class="form-control" placeholder="Confirm your password">
                        </div>
                        <div class="text-center">
                            <button type="submit" @click.prevent="Register" class="btn btn-primary py-2 px-3">Register</button>
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
export default {
    data(){
        return {
            form: {
                email: '',
                password: '',
                name: '',
                password_confirmation: ''
            },
            errors: {

            }
        }
    },
    methods: {
        async Register(){
            try{
                const response = await Auth.Register(this.form)
                if(response.status == 201){
                    this.$toast.success("Registraion was successful",{position: "top-right"})
                    setTimeout(()=>{
                        this.$router.push({ name: 'login' })
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