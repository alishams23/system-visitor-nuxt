<template>
  <div class="">
  <headerpage/>
  <!-- ======= Sidebar ======= -->
<aside id="sidebar" class="sidebar">
    <div class="rounded-4 bg-parsiyan mb-3">
        <div class=" d-flex flex-column justify-content-between py-2 px-2">
            <div class=" d-flex flex-column justify-content-between fw-bold text-white py-1 rtl">
              <span class=" pb-2 me-2 ">آقای حسینی</span>
              <span class=" py-2 me-2 ">فروشگاه برادران حسینی</span>
              <span class=" pt-2 me-2 ">تلفن تماس:37307074 </span>
            </div> 
        </div>
    </div>
    <div class=" bg-parsiyan rounded-4 shadow d-flex flex-column justify-content-between py-2 px-2">
      <div class="d-flex justify-content-between">
        <div class="d-flex ps-2 pt-2">
          <div>
          
          </div> 
          <div class="ps-2">
            <div class=" bg-white-opacity d-flex justify-content-center align-items-center w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16" class="bi bi-wallet2"><path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
            </svg>
            </div>
          </div>
        </div> 
        <p class="text-white fs-6 pe-2 pt-2 fw-bold">مانده حساب</p>
      </div> 
      <div class="text-white d-flex justify-content-end">
      <p class="fs-xs px-3 fw-light pt-2">تومان</p> <p class="pe-3 pt-2 fs-5">2</p>
      </div>
    </div>
    <ul class="sidebar-nav pt-3" id="sidebar-nav">
      <li class="nav-item py-2">
        <nuxt-link to="Customersaccount" class="nav-link rtl text-dark bg-info bg-opacity-25">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi ms-2 bi-cart2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
          </svg>
          <span>سبد خرید</span>
        </nuxt-link>
      </li>
      <li class="nav-item py-2">
        <nuxt-link to="Customersaccount" class="nav-link rtl text-dark bg-info bg-opacity-25">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi ms-2 bi-basket" viewBox="0 0 16 16">
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <span class="">خرید جدید</span>
        </nuxt-link>
      </li>
      <li class="nav-item py-2">
        <nuxt-link to="Customersaccount" class="nav-link rtl text-dark bg-info bg-opacity-25">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi ms-2 bi-calendar3" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          <span>تاریخچه خرید</span>
        </nuxt-link>
      </li>
      <li class="nav-item py-2">
        <nuxt-link to="Customersaccount" class="nav-link rtl text-dark bg-info bg-opacity-25">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi ms-2 bi-calendar2-check" viewBox="0 0 16 16">
            <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
          </svg>
          <span>تاریخچه پرداخت</span>
        </nuxt-link>
      </li>
      <li class="nav-item py-2">
        <nuxt-link to="Customersaccount" class="nav-link rtl text-dark bg-info bg-opacity-25">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi ms-2 bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
          </svg>
          <span>خروج</span>
        </nuxt-link>
      </li>
    </ul>

  </aside>
  <main id="main" class="main">
    <div class="rounded-10  m-0 my-2  shadow-1 bg-white border-t hover:bg-gray-100 d-flex justify-content-between " style="overflow: hidden;">
        <div class="d-flex align-items-center pl-3 ms-4">
            جمع کل:96000
        </div> 
        <div class="d-flex align-items-center pl-3">
            هر عدد:12000
        </div> 
    <div class="d-flex align-items-center pl-3">

    </div> 


    <div class="d-flex align-items-center ">
            <div class="rtl py-3 pr-2"><div class="fw-bold">چای اقاقیا</div><div class="text-muted">8کارتن</div>
            </div>
        <div>
            <div class="rounded-pill mx-2 w-8 h-8 d-flex justify-content-center align-items-center bg-warning ms-5">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
            </div>
        </div> 
        <div class="bg-warning" style="width: 5px !important; height: 100%;"></div>
    </div>
    </div>
  </main>

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