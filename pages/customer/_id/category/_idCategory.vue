<template>
  <div>
  <div class="row">

  <!-- Left side columns -->
  <div class="col-lg-12">
  {{data}}
      <div class="row mt-3 justify-content-around">
          <div v-for="result in data" :key="result.id" class="card mb-3 shadow col-12 col-md-3" style="width: 18rem;">
              <img class="card-img-top img-fluid p-2" :src="result.image[0].photo">
              <div class="card-body d-flex flex-column justify-content-center">
                  <h5 class="card-stitle text-center">{{result.title}}</h5>
                  <p class="card-stitle text-center">قیمت : {{result.price}}</p>
                  <input type="number" class=" form-control mb-3">
                  <span class=" bg-parsiyan text-center text-white px-3 py-1 rounded-3">ثبت</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"
import headerpage from "~/components/Header.vue"
// ${this.$route.params.id}
export default {
components:{headerpage,},
    layout: "customer",
    data(){
        return{
            data:[]
        }
    },
    methods:{
        async getData(){
            await axios.get(`http://192.168.191.5:8000/api/product/product_list/${this.$route.params.idCategory}/`)
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
    mounted(){
        this.getData()
    }

}
</script>

<style>

</style>
