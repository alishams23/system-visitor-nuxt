<template>
  <div class="  row justify-content-center mt-5">
    <form @submit.prevent="getCustomerInfo" class=" col-lg-8 col-md-11 col-11 bg-white p-4 py-5 rounded-4 shadow-t2">
      <div class=" text-center text-primary mt-2">
        <h4>ورود به حساب مشتریان</h4>
      </div>
      <div class="row justify-content-center">
        <div class=" col-lg-8 col-md-12 col-12  rtl ">
          <label for="customerId" class=" my-4"><span class=" fs-6">کد مشتری را وارد کنید</span></label>
          <input id="customerId" v-model="customerId" class=" form-control mb-5">
          <div v-if="loading == true" class="d-flex  align-items-center">
            <div class="  bg-parsian text-center text-white  px-4 pt-1 rounded-3">
              <div class="loader-light"></div>
            </div>
          </div>
          <button v-if="loading == false" type="submit" class=" bg-parsian text-center text-white d-inline px-4 py-1 rounded-3">ورود</button>
        </div>
      </div>
      {{ data }}
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import headerpage from "~/components/Header.vue"
export default {
  data() {
    return {
      customerId: null,
      data: {},
      loading: false
    }
  },
  methods: {
    async getCustomerInfo() {
      this.loading = true
      await axios.get(`http://192.168.191.2:8000/api/account/Customer_panel_retrieve/${this.customerId}/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        }).then((response) => {
          this.data = response.data
          this.$router.push({path:`/customer/${this.customerId}/category/`,}); 
        });
      this.loading = false
    }
  },
  components: { headerpage, }
}
</script>

<style>
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid rgb(243, 243, 243);
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader-light {
  width: 25px;
  height: 25px;
  border: 3px solid rgba(243, 243, 243, 0.115);
  border-bottom-color: #ffffff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
</style>