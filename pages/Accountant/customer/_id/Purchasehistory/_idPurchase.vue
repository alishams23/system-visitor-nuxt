<template>
  <div v-if="data">
    <table class="table rounded-3 rtl  table-hover " v-if="data">
      <thead class="bg-parsian-solid text-white ">
        <tr >
          <th scope="col" class="rounded-end"> ردیف</th>
          <th scope="col">نام کالا</th>
          <th scope="col">تعداد</th>
          <th scope="col">قیمت واحد</th>
          <th scope="col" class="rounded-start">جمع کل</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in data.products" class="bg-white" :key="result.id">
          <th scope="row">{{ index }}</th>
          <td>{{ result.product.title }}</td>
          <td>{{ result.count }}</td>
          <td>{{ result.product.price }}</td>
          <td>{{ result.product.price * result.count }}</td>
        </tr>
      </tbody>
    </table>


    <div class="rounded-3  m-0 my-3  shadow-t2 bg-white d-flex justify-content-between " style="overflow: hidden;">
      <div class="">
      </div>
      <div class="d-flex align-items-center ">
        <div class="rtl  pr-3 d-flex align-items-center  flex-wrap">
          <div class="px-3 mx-5 my-3">
            <div class="d-flex justify-content-center rtl fw-bold bg-white">
              <div class=""> جمع کل فاکتور :</div>
              <div class="px-3"> {{ total }} تومان</div>
            </div>
          </div>
          <div class="my-3 mx-5 d-flex justify-content-between rounded-3 bg-gray py-3 px-4">
            <div class="fw-bold"> نحوه پرداخت:
            </div>
            <div class="px-3">
              <span v-if="data.is_payment_cash == true">نقد</span>
              <span v-else>چک</span>
            </div>
          </div>
        </div>
        <div class="bg-parsian-solid" style="width: 5px !important; height: 100%;"></div>
      </div>

    </div>
    <div class="rtl">
      <button v-if="loading == true" @click="accept()"
        class="border-none bg-parsian-solid text-center text-white d-inline px-5 py-2 rounded-pill m-3"> <div class="loader-light"></div></button>
      <button v-if="loading == false && data.check_Accountants != true" @click="accept()"
        class="border-none bg-parsian-solid text-center text-white d-inline px-5 py-2 rounded-pill m-3">ثبت
        نهایی</button>
        <button v-if="loading == false && data.check_Accountants == true" @click="accept()"
        class="border-none bg-danger text-center text-white d-inline px-5 py-2 rounded-pill m-3">لغو ثبت</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: "accountantCustomer",
  data() {
    return {
      data: null,
      total: 0,
      loading: false
    }
  },
  methods: {
    async getCartInfo() {
      await axios.get(`https://parsiancoyazd.ir/api/product/Order_retrieve_2/${this.$route.params.idPurchase}/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        }).then((response) => {
          this.data = response.data
        });
      this.data.products.forEach(element => {
        this.total += element.product.price * element.count
      });
    },
    async accept() {
      this.loading = true
      await axios.get(`https://parsiancoyazd.ir/api/accountant/confirm_Order/${this.data.id}/`)
        .then((response) => {
          this.loading = false;this.data.check_Accountants=!this.data.check_Accountants
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });


    }
  },
  mounted() {
    this.getCartInfo()
  }
}
</script>

<style>

</style>