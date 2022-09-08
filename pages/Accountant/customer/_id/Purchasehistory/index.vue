<template>
  <div>
    <nuxt-link
      :to="`${item.id}`"
      class="rounded-3 m-0 my-3 shadow-t2 bg-white d-flex justify-content-between"
      style="overflow: hidden"
      v-for="item in data"
      :key="item.id + 'purchase History'"
    >
      <div class=""></div>
      <div class="col-12 d-flex align-items-center justify-content-end flex-row">
        <div class="d-flex align-items-center justify-content-between rtl col-11 py-3 pr-3">
          <div >
            <div class="text-black fs-6 fw-bold pb-2 pe-4">
              تاریخ خرید :{{ item.Order_time_jalali }}
            </div>
            <div class="text-muted pe-5 fs-7">
              تعداد محصولات : {{ item.products.length }}
            </div>
          </div>
          <div class="rtl rounded-pill bg-succeed-light py-2 px-5">
            <div class=" fw-bold fs-7">ثبت شده</div>
          </div>
        </div>

        <div
          class="bg-parsian"
          style="width: 5px !important; height: 100%"
        ></div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "accountantCustomer",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getPurchaseHistory() {
      await axios
        .get(
          `http://127.0.0.1:8000/api/product/History_purchase_list/${this.$route.params.id}/`
        )
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })
        .then((response) => {
          this.data = response.data;
        });
    },
  },
  mounted() {
    this.getPurchaseHistory();
  },
};
</script>

<style></style>
