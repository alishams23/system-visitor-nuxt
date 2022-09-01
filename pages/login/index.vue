<template>
  <div class=" container">
      <div class=" row my-5">
        <div class=" col-9 col-md-6 bg-danger d-flex align-items-center justify-content-center text-white rounded-start">
      بازرگانی پارسیان
      </div>
      <div class=" col-9 col-md-6 bg-secondary rounded-end">
        <form  class=" p-4 rtl" @submit.prevent="login">
            <div class="">
              <label class="" for="name">نام کاربری</label>
              <input type="text" v-model="username" required class=" form-control" placeholder="نام کاربری خودرا وارد کنید" >
            </div>
            <div class="">
              <label class="label" for="password">رمز ورود</label>
              <input type="password" v-model="password" required class=" form-control" placeholder="رمز خود را وارد کنید">
            </div>
            <div class="">
              <button type="submit" class=" form-control text-center mt-4">ورود</button>
            </div>
            {{data}}
        </form>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: "login",

  data(){
    return{
      username:null,
      password:null,
      loading:false,
      data:null,

    }
  },methods:{
    async login(){
      this.loading = true
      await axios.post("http://192.168.191.2:8000/api/account/login/",{username:this.username,password:this.password}).then((response) => {this.$store.commit("login", {
                token: response.data.token,
                username: this.username,})}).then(this.$router.back())
      this.loading=false
    }
  }

}
</script>

<style>

</style>