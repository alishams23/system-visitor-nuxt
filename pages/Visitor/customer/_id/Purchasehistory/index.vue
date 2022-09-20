<template>
  <div>
  <nuxt-link :to="`${item.id}`"  class="rounded-3  m-0 my-3  shadow-t2 bg-white d-flex justify-content-between "  style="overflow: hidden;" v-for="item in data " :key="item.id + 'purchase History'">
    <div class="">
    </div>
    <div class="d-flex align-items-center ">
      <div class="rtl py-3 pr-3">
          <div class="text-black fs-6 fw-bold pb-2 pe-4"> تاریخ خرید :{{item.Order_time_jalali}}</div>
          <div class="text-muted pe-5 fs-7"> تعداد محصولات : {{item.products.length}}</div>
      </div>
      <div class="bg-parsian" style="width: 5px !important; height: 100%;"></div>
    </div>
  </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    layout: "visitorCustomer",
    data(){
      return{
        data:[],
      }
    },
    methods: {
    async getPurchaseHistory() {
      await axios.get(`https://parsiancoyazd.ir/api/product/History_purchase_list/${this.$route.params.id}/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        }).then((response) => {
          this.data = response.data
        });
    }},mounted(){
      this.getPurchaseHistory()
    }
}
</script>

<style>

</style>