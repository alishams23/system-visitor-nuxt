<template>
    <div class="  row justify-content-center mt-5">
        <form @submit.prevent="getCustomerInfo"
            class=" col-lg-8 col-md-11 col-11 bg-white p-4 py-5 rounded-4 shadow-t2">
            <div class=" text-center text-parsian  mt-2">
                <h4 class="fw-bold">ورود به حساب مشتریان</h4>
            </div>
            <div class="mt-3 text-center text-danger" v-if="errorLogin == true">
            کد مشتری اشتباه میباشد
          </div>
            <div class="row justify-content-center">
                <div class=" col-lg-8 col-md-12 col-12  rtl ">
                    <label for="customerId" class=" my-4 text-muted"><span class=" fs-6">کد مشتری را وارد کنید</span></label>
                    <input id="customerId" v-model="customerId" class=" form-control mb-5">
                    <div v-if="loading == true" class="d-flex  align-items-center">
                        <div class="  bg-parsian text-center text-white  px-4 pt-1 rounded-3">
                            <div class="loader-light"></div>
                        </div>
                    </div>
                    <button v-if="loading == false" type="submit"
                        class=" bg-parsian-solid border-none text-center text-white d-inline px-5 py-2 rounded-pill">ورود</button>
                </div>
            </div>
          
        </form>
    </div>
</template>
  
  <script>
import axios from 'axios'
import headerpage from "~/components/Header.vue"
export default {
    layout: 'visitor',
    
    data() {
        return {
            customerId: null,
            data: {},
            loading: false,
            errorLogin:false
        }
    },
    methods: {
        async getCustomerInfo() {
            this.loading = true
            await axios.get(`https://parsiancoyazd.ir/api/account/Customer_panel_retrieve/${this.customerId}/`,{
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`
            }
          })
               .then((response) => {
                    this.data = response.data
                    this.$router.push({ path: `/Visitor/customer/${this.customerId}/category/`, });
                }).catch( (error) => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
                this.errorLogin =true
            this.loading = false
        }
    },
    components: { headerpage, }
}
</script>
  
  <style>
  </style>