<template>
  <div class="">
    <headerpage />
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar d-flex flex-column justify-content-between">

      <div >
        <div class="d-flex flex-row align-items-center">
          <div class="col-3 d-flex justify-content-center me-1">
            <div class="p-3 rounded-pill bg-gray" >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9968 15.1746C7.68382 15.1746 3.99982 15.8546 3.99982 18.5746C3.99982 21.2956 7.66082 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z" fill="#200E32"/>
<path opacity="0.4" d="M11.9968 12.5837C14.9348 12.5837 17.2888 10.2287 17.2888 7.2917C17.2888 4.3547 14.9348 1.9997 11.9968 1.9997C9.05983 1.9997 6.70483 4.3547 6.70483 7.2917C6.70483 10.2287 9.05983 12.5837 11.9968 12.5837Z" fill="#200E32"/>
</svg>


            </div>
          </div>
          <div class="rounded-4 col-9  mb-3" v-if="data != null">
            <div class=" d-flex flex-column justify-content-between py-2 ">
              <div class=" d-flex flex-column justify-content-between py-1 rtl">
                <div class=" py-2  fs-5 rtl fw-bold"> فروشگاه :{{ data.name_shop }}</div>
                <div class=" pb-2  "> آقای :{{ data.first_name }} {{ data.last_name }} </div>
                <div class=" pt-2  fs-7 lead text-muted">تلفن تماس:{{ data.Phone_number }} </div>
              </div>
            </div>
          </div>
          
        </div>

        <ul class="sidebar-nav pt-3" id="sidebar-nav">
          <li class="nav-item  py-1">
            <nuxt-link :to="`/customer/${this.$route.params.id}/category`" class="nav-link rtl  rounded-pill "
              :class="currentRouteCheck('category') ? 'bg-parsian-light  ' : 'text-black text-parsian-hover'">

              <span class="my-1 px-3">خرید جدید</span>
            </nuxt-link>
          </li>
          <li class="nav-item  py-1">
            <nuxt-link :to="`/customer/${this.$route.params.id}/Cart/${this.$route.params.idCart}`"
              class="nav-link rtl  rounded-pill "
              :class="currentRouteCheck('Cart') ? 'bg-parsian-light  ' : 'text-black text-parsian-hover'">

              <span class="my-1 px-3">سبد خرید</span>
            </nuxt-link>
          </li>
          <li class="nav-item  py-1">
            <nuxt-link :to="`/customer/${this.$route.params.id}/Purchasehistory/`" class="nav-link rtl  rounded-pill "
              :class="currentRouteCheck('Purchasehistory') ? 'bg-parsian-light  ' : 'text-black text-parsian-hover'">

              <span class="my-1 px-3">تاریخچه خرید</span>
            </nuxt-link>
          </li>
          <li class="nav-item py-1">
            <nuxt-link to="Visitor" class="nav-link rtl   rounded-pill "
              :class="currentRouteCheck('exit') ? 'bg-parsian-light  ' : 'text-black text-parsian-hover'">

              <span class="my-1 px-3">خروج</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="bg-parsian rounded-4">
        <div v-if="data != null"
          class="  background-wallet rounded-4 shadow d-flex flex-column justify-content-between py-2 px-2">
          <div class="d-flex justify-content-between">
            <div class="d-flex ps-2 pt-2">
              <div>

              </div>
              <div class="ps-2">
                <div class=" d-flex justify-content-center align-items-center w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" viewBox="0 0 16 16"
                    class="bi bi-wallet2">
                    <path
                      d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-white fs-6 pe-2 pt-2">خرید</p>
          </div>
          <div class="text-white d-flex justify-content-end">
            <p class="fs-xs my-1 px-3  pt-2">تومان</p>
            <p class="pe-3 pt-2 fs-5">{{ data.payment_invoice }}</p>
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
import axios from "axios";
import headerpage from "~/components/Header.vue"
export default {
  layout: 'customer',
  // OR
  layout(context) {
    return 'customer'
  }, data() {
    return {
      data: null
    }
  }, computed: {
    isAuthenticated: {
      get() {
        return this.$store.state.isAuthenticated;
      }
    }
  }, components: { headerpage, }, methods: {
    currentRouteName() {
      return this.$route.name;
    }, currentRouteCheck(data) {
      return this.$route.name.split("-").includes(data);
    }
  }, beforeMount() {
    this.$store.commit("onStart");
  }, mounted() {
    if (this.$route.params.id) {
      axios.get(`http://192.168.191.2:8000/api/account/Customer_panel_retrieve/${this.$route.params.id}/`)
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