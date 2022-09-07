<template>
    <div class="card mb-3 shadow-none col-12 col-md-3 rounded-3 pt-3" style="width: 18rem;">
        <VueSlickCarousel v-bind="settings" class="mb-4" v-if="result.image.length > 0">
            <img v-for="item in result.image" :key="item.id + '-header'" :src="item.photo" class=" card-img-top  ">
        </VueSlickCarousel>

        <div v-if="!(result.image.length > 0)"
            class=" mb-3 bg-gray pb-1  rounded-3 d-flex align-items-center justify-content-center"
            style="min-height :150px">
            <div class="bg-white rounded-pill p-3 "><svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.08674 16.3147L3.85564 10.1201C4.32405 7.90964 5.64973 7 6.91355 7H17.0683C18.3498 7 19.7197 7.84597 20.1174 10.1201L20.8951 16.3147C21.5314 20.8629 19.1894 22 16.1315 22H7.84153C4.79245 22 2.52111 20.3535 3.08674 16.3147ZM14.903 12.1486C15.3911 12.1486 15.7868 11.7413 15.7868 11.2389C15.7868 10.7366 15.3911 10.3293 14.903 10.3293C14.4149 10.3293 14.0192 10.7366 14.0192 11.2389C14.0192 11.7413 14.4149 12.1486 14.903 12.1486ZM9.99797 11.2389C9.99797 11.7413 9.60229 12.1486 9.11418 12.1486C8.62608 12.1486 8.23039 11.7413 8.23039 11.2389C8.23039 10.7366 8.62608 10.3293 9.11418 10.3293C9.60229 10.3293 9.99797 10.7366 9.99797 11.2389Z"
                        fill="purple" />
                    <path opacity="0.4"
                        d="M7.02613 6.77432C7.02299 6.85189 7.0379 6.92913 7.06968 7H8.50679C8.53462 6.92794 8.54937 6.85153 8.55034 6.77432C8.55034 4.85682 10.1101 3.30238 12.0343 3.30238C13.9584 3.30238 15.5182 4.85682 15.5182 6.77432C15.505 6.84898 15.505 6.92535 15.5182 7H16.9901C17.0033 6.92535 17.0033 6.84898 16.9901 6.77432C16.8783 4.10591 14.675 2 11.9951 2C9.31511 2 7.11183 4.10591 7 6.77432H7.02613Z"
                        fill="#200E32" />
                </svg>
            </div>
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="rtl">{{ result.title }}</h5>
                <div class="d-flex justify-content-between my-2">
                    <div class="text-muted rtl pb-2  ">تعداد : {{ result.count }}</div>

                    <div class=" rtl text-muted">قیمت : {{ result.price }}</div>
                </div>
                <div class="d-flex flex-wrap rtl ">
                    <div v-for="item in result.category" :key="item.id + 'category id card'"
                        class="rounded-pill py-1 mx-1 px-3 fs-7 bg-gray">{{ item.title }}</div>
                </div>
            </div>
            <form  @submit.prevent="addToCard" v-if="loading == false && customer">
                <input type="number" min="1" :max="result.count" v-model="count" class=" form-control rounded-pill fs-7 my-3 rtl"  placeholder="تعداد..." required>
                <button type="submit"
                
                    class=" bg-parsian-solid text-center col-12 border-none text-white px-3 py-1 d-flex justify-content-around rounded-pill">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.42226 19.8203C7.84426 19.8203 8.18726 20.1633 8.18726 20.5853C8.18726 21.0073 7.84426 21.3493 7.42226 21.3493C7.00026 21.3493 6.65826 21.0073 6.65826 20.5853C6.65826 20.1633 7.00026 19.8203 7.42226 19.8203Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M14.1254 10.795H16.8984" stroke="white" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div>ثبت</div>
                </button>
            </form>
                <div v-if="loading == true" class="d-flex  align-items-center">
                    <div class="  bg-parsian-solid text-center col-12 text-white mt-1 px-4 pt-1 rounded-pill">
                        <div class="loader-light"></div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axios from "axios"
export default {
    props: ["result", "customer"],
    components: {
        VueSlickCarousel
    }, data() {
        return {
            settings: {
                "lazyLoad": "ondemand",
                "dots": true,
                "fade": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
            }, loading: false,count:null,
        }
    }, methods: {
        addToCard() {
            this.loading = true
            axios.get(`http://127.0.0.1:8000/api/product/add_product_to_order/${this.customer}/${this.result.id}/${this.count}/`)
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                }).then((response) => {
                    this.result.count = this.result.count - this.count
                    this.loading = false
                });
        }
    }
}
</script>

<style>
</style>