<template>
   <div class="">
  <headerpage/>
  <!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">
    <div class="rounded-4  mb-3" v-if="data != null">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class=" d-flex flex-column justify-content-between py-1 rtl">
              <span class=" pb-2 me-2 "> آقای :{{data.first_name}} {{data.last_name}} </span>
              <span class=" py-2 me-2 fs-5 rtl fw-bold">نام فروشگاه :{{data.name_shop}}</span>
              <span class=" pt-2 me-2 fs-6 lead text-muted">تلفن تماس:{{data.Phone_number}} </span>
            
            </div> 
        </div>
    </div>
    <div v-if="data != null" class="  bg-parsiyan rounded-4 shadow d-flex flex-column justify-content-between py-2 px-2">
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
      <p class="fs-xs px-3 fw-light pt-2">تومان</p> <p class="pe-3 pt-2 fs-5">{{data.payment_invoice}}</p>
      </div>
    </div>
    <ul class="sidebar-nav pt-3" id="sidebar-nav">
      <li class="nav-item text-parsiyan-hover py-2">
        <nuxt-link :to="`/customer/${this.$route.params.id}/category`" class="nav-link rtl fw-light rounded-3" :class="currentRouteCheck('category')   ? 'bg-parsiyan text-white' : 'text-black text-parsiyan-hover'">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi ms-2 bi-basket" viewBox="0 0 16 16">
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <span class="">خرید جدید</span>
        </nuxt-link>
      </li>
      <li class="nav-item text-parsiyan-hover py-2">
        <nuxt-link :to="`/customer/${this.$route.params.id}/Cart/${this.$route.params.idCart}`" class="nav-link rtl fw-light rounded-3" :class="currentRouteCheck('Cart') ? 'bg-parsiyan text-white' : 'text-black text-parsiyan-hover'">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi ms-2 bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          <span>سبد خرید</span>
        </nuxt-link>
      </li>
      <li class="nav-item  py-2">
        <nuxt-link :to="`/customer/${this.$route.params.id}/Purchasehistory/`" class="nav-link rtl fw-light rounded-3" :class="currentRouteCheck('Purchasehistory')? 'bg-parsiyan text-white' : 'text-black text-parsiyan-hover'">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi ms-2 bi-calendar3" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          <span>تاریخچه خرید</span>
        </nuxt-link>
      </li>
      <li class="nav-item py-2">
        <nuxt-link to="Visitor" class="nav-link rtl  fw-light rounded-3" :class="currentRouteCheck('exit') ? 'bg-parsiyan text-white' : 'text-black text-parsiyan-hover'">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi ms-2 bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
          </svg>
          <span>خروج</span>
        </nuxt-link>
      </li>
    </ul>

  </aside>
  <main id="main" class="main">
       <nuxt></nuxt>
  </main>

  </div>
</template>

<script>
import axios from "axios";
import headerpage from "~/components/Header.vue"
export default {
 layout: 'customer',
  // OR
  layout (context) {
    return 'customer'
  },data(){
    return{
      data:null
    }
  }, computed: {
    isAuthenticated: {
      get() {
        return this.$store.state.isAuthenticated;
      }
    }
  },components:{headerpage,},methods:{
    currentRouteName() {
      return this.$route.name;
    },currentRouteCheck(data) {
      return this.$route.name.split("-").includes(data);
    }
  },beforeMount() {
    this.$store.commit("onStart");
  },mounted(){
    if (this.$route.params.id) {
      axios.get(`http://192.168.191.5:8000/api/account/Customer_panel_retrieve/${this.$route.params.id}/`)
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
  }
}
</script>

<style>

</style>