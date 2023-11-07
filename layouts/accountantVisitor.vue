<template>
    <div class="">
        <headerpage />
        <!-- ======= Sidebar ======= -->
        <aside id="sidebar" class="sidebar d-flex flex-column justify-content-between">
            <div>
                <div class="d-flex flex-row align-items-center">
                    <div class="col-3 d-flex justify-content-center me-1">
                        <div class="p-3 rounded-pill bg-gray">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="black"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9968 15.1746C7.68382 15.1746 3.99982 15.8546 3.99982 18.5746C3.99982 21.2956 7.66082 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z"
                                    fill="#200E32" />
                                <path opacity="0.4"
                                    d="M11.9968 12.5837C14.9348 12.5837 17.2888 10.2287 17.2888 7.2917C17.2888 4.3547 14.9348 1.9997 11.9968 1.9997C9.05983 1.9997 6.70483 4.3547 6.70483 7.2917C6.70483 10.2287 9.05983 12.5837 11.9968 12.5837Z"
                                    fill="#200E32" />
                            </svg>
                        </div>
                    </div>
                    <div class="rounded-4 col-9  mb-3" v-if="data != null">
                        <div class=" d-flex flex-column justify-content-between py-2 ">
                            <div class=" d-flex flex-column justify-content-between py-1 rtl">
                                <div class=" py-2  fs-5 rtl fw-bold"> یوزر :{{ data.username }}</div>
                                <div class=" pb-2  "> نام :{{ data.get_full_name }} </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-9  my-4" v-if="data == null">
                        <div class=" d-flex flex-row justify-content-center ">
                            <div class="loader"></div>
                        </div>
                    </div>
                </div>

                <ul class="sidebar-nav pt-3" id="sidebar-nav">
                    <li class="nav-item  py-1">
                        <nuxt-link :to="`/Accountant/visitor/${this.$route.params.id}/Purchasehistory/`"
                            class="nav-link rtl  rounded-pill "
                            :class="currentRouteCheck('Purchasehistory') ? 'bg-parsian-light  ' : 'text-black text-parsian-hover'">

                            <span class="my-1 px-3">تاریخچه فروش</span>
                        </nuxt-link>
                    </li>
                    <li class="nav-item py-1">
                        <nuxt-link to="/Accountant/loginVisitor"
                            class="nav-link rtl   rounded-pill text-black text-parsian-hover">

                            <span class="my-1 px-3">خروج</span>
                        </nuxt-link>
                    </li>
                </ul>
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
    layout: 'accountantVisitor',
    // OR
    layout(context) {
        return 'accountantVisitor'
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
            axios.get(`https://parsiancoyazd.ir/api/account/User_retrieve/${this.$route.params.id}/`,{
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`
            }
          })
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