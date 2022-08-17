<template>
  <div class="">
  <headerpage/>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">
    <div class="rounded bg-parsiyan mb-5">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class="d-flex justify-content-center">
                <p class=" fs-6 pe-2 pt-2 text-white ">ورود به حساب ویزیتور </p>
            </div> 
        </div>
    </div>
    <div class="rounded bg-parsiyan mb-5">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class="d-flex justify-content-center">
                <p class=" fs-6 pe-2 pt-2 text-white ">ورود به حساب مشتریان </p>
            </div> 
        </div>
    </div>
    

  </aside><!-- End Sidebar-->
  <main id="main" class="main">
      <nuxt></nuxt>
  </main>

  </div>
</template>

<script>
import headerpage from "~/components/Header.vue"
export default {
components:{headerpage,},
methods:{
    currentRouteName() {
      return this.$route.name;
        }
    }

}
</script>

<style>

</style>