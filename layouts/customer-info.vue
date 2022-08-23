<template>
   <div class="">
  <headerpage/>
  <!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">
    <div class="rounded-4  mb-3">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class=" d-flex flex-column justify-content-between py-1 rtl">
              <span class=" pb-2 me-2 ">آقای حسینی</span>
              <span class=" py-2 me-2 fs-5 fw-bold">فروشگاه برادران حسینی</span>
              <span class=" pt-2 me-2 fs-6 lead text-muted">تلفن تماس:37307074 </span>
            </div> 
        </div>
    </div>
    <div class="  bg-parsiyan rounded-4 shadow d-flex flex-column justify-content-between py-2 px-2">
      <div class="d-flex justify-content-between">
        <div class="d-flex ps-2 pt-2">
          <div>
          
          </div> 
          <div class="ps-2">
            <div class=" d-flex justify-content-center align-items-center w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" viewBox="0 0 16 16" class="bi bi-wallet2"><path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
            </svg>
            </div>
          </div>
        </div> 
        <p class="text-white fs-6 pe-2 pt-2">مانده حساب</p>
      </div> 
      <div class="text-white d-flex justify-content-end">
      <p class="fs-xs px-3 fw-light pt-2">تومان</p> <p class="pe-3 pt-2 fs-5">2</p>
      </div>
    </div>

  </aside>
  <main id="main" class="main">
       <nuxt></nuxt>
  </main>

  </div>
</template>

<script>
import headerpage from "~/components/Header.vue"
export default {
 layout: 'customer-info',
  // OR
  layout (context) {
    return 'customer-info'
  },components:{headerpage}
}
</script>

<style>

</style>