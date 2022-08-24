<template>
  <div>
    {{data}}
  <nuxt-link :to="`${item.id}`"  class="rounded-2  m-0 my-2  shadow-1 bg-white d-flex justify-content-between "  style="overflow: hidden;" v-for="item in data " :key="item.id + 'purchase History'">
    <div class="">
    </div>
    <div class="d-flex align-items-center ">
      
      <div class="rtl py-3 pr-2">
          <div class="text-muted pe-3"> تاریخ خرید :{{item.Order_time}}</div>
      </div>
      <div class="bg-warning" style="width: 5px !important; height: 100%;"></div>
    </div>
  </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    layout: "customer",
    data(){
      return{
        data:[],

      }
    },
    methods: {
    async getPurchaseHistory() {
      await axios.get(`http://192.168.191.5:8000/api/product/History_purchase_list/${this.$route.params.id}/`)
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