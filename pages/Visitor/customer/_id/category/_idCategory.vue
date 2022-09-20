<template>
  <div>

    <div class="row">
      <!-- Left side columns -->
      <div class="col-lg-12">

        <div class="row mt-3 justify-content-around ">
          <product v-for="result in data" :key="result.id"  :result="result" :customer="$route.params.id" />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import product from '@/components/product.vue'

export default {
  layout: "visitorCustomer",
  components: {
    product
  },
  data() {
    return {
      data: [], 
    }
  },
  methods: {
    async getData() {
      await axios.get(`https://parsiancoyazd.ir/api/product/product_list/${this.$route.params.idCategory}/`)
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
  },
  mounted() {
    this.getData()
  }

}
</script>

<style>
.slick-prev:before,
.slick-next:before {
  color: rgb(179, 179, 179) !important;

}
</style>