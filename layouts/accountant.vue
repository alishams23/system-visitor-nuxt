<template>
  <div class="">
  <headerpage/>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">
   <div>
     <nuxt-link to="Accountant-customer">
    <div class="rounded my-4" :class="currentRouteName()=='Accountant-customer'?'bg-parsiyan text-white':'text-black text-parsiyan-hover'">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class="d-flex justify-content-center">
                <p class=" fs-6 pe-2 pt-2 ">ورود به حساب مشتریان </p>
            </div> 
        </div>
    </div>
    </nuxt-link>
    <nuxt-link to="Accountant-visitor">
    <div class="rounded  my-4" :class="currentRouteName()=='Accountant-visitor'?'bg-parsiyan text-white':'text-black text-parsiyan-hover'">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class="d-flex justify-content-center">
                <p class=" fs-6 pe-2 pt-2 ">ورود به حساب ویزیتور </p>
            </div> 
        </div>
    </div>
    </nuxt-link>
    
    

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