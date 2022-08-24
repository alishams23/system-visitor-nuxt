<template>
<div>
 <nuxt-link v-for="result in data" :key="result.id + 'category'" :to="`/customer/${$route.params.id}/category/${result.id}/`" class="rounded-5 shadow-sm text-parsiyan m-0 my-3  shadow-1 bg-white border-t hover:bg-gray-100 d-flex justify-content-between " style="overflow: hidden;">
    <div class="d-flex align-items-center">
    </div>
    <div class=" text-center py-3 pr-2">
        <div class="fw-bold"> {{result.title}}</div>
    </div>
    <div>
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
    layout: "customer",
    methods:{
      async getData(){
       await axios.get(`http://192.168.191.5:8000/api/product/Category_list/`)
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