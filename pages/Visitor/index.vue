<template>
<div class="  row justify-content-center mt-5">
        <div class=" col-lg-8 col-md-11 col-11 bg-white p-4 py-5 rounded-4 shadow-sm">
          <div class=" text-center text-primary mt-2">
            <h4>ورود به حساب  مشتریان</h4>
        </div>
        <div class="row justify-content-center">
          <div class=" col-lg-8 col-md-12 col-12  rtl ">
          <label for="customerId" class=" my-4"><span class=" fs-6">کد مشتری را وارد کنید</span></label>
          <input id="customerId" class=" form-control mb-5">
          <span class=" bg-parsiyan text-center text-white d-inline px-3 py-1 rounded-3">ورود</span>
          </div>
        </div>
        </div>
      </div>
</template>

<script>
import headerpage from "~/components/Header.vue"
export default {
components:{headerpage,}
}
</script>

<style>

</style>