<template>
  <div class=" container pt-5 mt-5">
      <div class=" row my-5 mx-3 shadow-t1">
        <div class=" col-12 col-md-6 bg-parsian d-flex py-2 align-items-center justify-content-center text-white  ">
      بازرگانی پارسیان
      </div>
      <div class=" col-12 col-md-6 bg-white ">
        <form  class=" p-4 rtl" @submit.prevent="login">
          <div class="mt-3 text-center text-danger" v-if="errorLogin == true">
            نام کاربری یا رمز عبور غلط میباشد
          </div>
            <div class="mt-3 ">
              <label class="pb-2" for="name">نام کاربری</label>
              <input type="text" v-model="username" required class=" form-control" placeholder="نام کاربری خودرا وارد کنید" >
            </div>
            <div class="mt-3 ">
              <label class="label pb-2" for="password">رمز ورود</label>
              <input type="password" v-model="password" required class=" form-control" placeholder="رمز خود را وارد کنید">
            </div>
            <div class="mt-5 mb-3">
              <button type="submit" class=" form-control text-center rounded-pill bg-parsian-solid text-white mt-4">ورود</button>
            </div>
          
        </form>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      username:null,
      password:null,
      loading:false,
      data:null,
      errorLogin:false,

    }
  },methods:{
    async login(){
      this.loading = true
      await axios.post("https://parsiancoyazd.ir/api/account/login/",{username:this.username,password:this.password}).then((response) => {if(response.data.token){this.$store.commit("login", {
                token: response.data.token,
                username: this.username,});this.$router.push("/")}}).catch( (error)  =>{
                    if (error.response) {
                      this.errorLogin = true
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                })
      this.loading=false
    }
  }

}
</script>

<style>

</style>