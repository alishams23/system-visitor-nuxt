<template>
<div>

  <nuxt-link :to="`/Visitor/customer/${$route.params.id}/category/${result.id}/`"  class="rounded-3  m-0 my-3  shadow-t2 bg-white d-flex justify-content-between "  style="overflow: hidden;" v-for="result in data" :key="result.id + 'category'">
    <div class="">
    </div>
    <div class="d-flex align-items-center ">
      <div class="rtl py-3 pr-3">
          <div class="text-black fs-5 fw-bold pb-2 pe-4"> {{result.title}}</div>
          <!-- <div class="text-muted pe-5 fs-7"> تعداد محصولات :</div> -->
      </div>
      <div class="bg-parsian" style="width: 5px !important; height: 100%;"></div>
    </div>
  </nuxt-link>
 
</div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      data:[],
    }
  },
    layout: "visitorCustomer",
    methods:{
      async getData(){
       await axios.get(`http://127.0.0.1:8000/api/product/Category_list/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        }).then((response) => {
          this.data = response.data
   
        });
    }
   },mounted(){
    this.getData()
   }

}
</script>

<style>

</style>