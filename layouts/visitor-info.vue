<template>
   <div class="">
  <headerpage/>
  <!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">
    <div class="rounded-4  mb-3">
        <div class=" d-flex flex-column justify-content-between py-2 px-2"> 
        <div class=" py-1 rtl">
              <span class=" pb-2 me-2 fs-5 fw-bold">آقای  </span>
              <span class=" py-2 me-2 fs-5 fw-bold">قاسمی  </span>
            </div> 
            <div class=" py-1 border-bottom  rtl">
              <span class=" pb-2 me-2 fs-5">کد:  </span>
              <span class=" py-2 me-2 fs-5">4420958669  </span>
            </div> 
            
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
    components:{headerpage},
 layout: 'visitor-info',
  layout (context) {
    return 'visitor-info'
  }}
</script>

<style>

</style>