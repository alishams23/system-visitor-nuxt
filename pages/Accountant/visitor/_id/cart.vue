<template>
    <div>
        <table class="table rounded-3 rtl bg-white table-hover " v-if="data && data.products.length !=0" >
            <thead class="bg-parsian-solid text-white">
                <tr>
                    <th scope="col" class="rounded-end"> ردیف</th>
                    <th scope="col">نام کالا</th>
                    <th scope="col">تعداد</th>
                    <th scope="col">قیمت واحد</th>
                    <th scope="col">جمع کل</th>
                    <th scope="col" class="rounded-start">حدف</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in data.products" :key="result.id">
                    <th scope="row">{{ index }}</th>
                    <td>{{ result.product.title }}</td>
                    <td>{{ result.count }}</td>
                    <td>{{ result.product.price }}</td>
                    <td>{{ result.product.price * result.count }}</td>
                    <td>
                        <div v-on:click="deleteItem(result.id)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4"
                                    d="M19.3249 9.46826C19.3249 9.46826 18.7819 16.2033 18.4669 19.0403C18.3169 20.3953 17.4799 21.1893 16.1089 21.2143C13.4999 21.2613 10.8879 21.2643 8.2799 21.2093C6.9609 21.1823 6.1379 20.3783 5.9909 19.0473C5.6739 16.1853 5.1339 9.46826 5.1339 9.46826"
                                    stroke="#200E32" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M20.7082 6.23975H3.7502" stroke="#200E32" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.5336 2.75073 9.0256 3.13873 8.8756 3.69973L8.6326 4.91573C8.4786 5.68473 7.8026 6.23973 7.0176 6.23973"
                                    stroke="#200E32" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
       <div v-if="data ">
        <empy  v-if="data.products.length ==0" />
        <form v-else  @submit.prevent="sendData">  
            <div class="rounded-3  m-0 my-3  shadow-t2 bg-white d-flex justify-content-between "
                style="overflow: hidden;">
                <div class="">
                </div>
                <div class="d-flex align-items-center ">
                    <div class="rtl  pr-3 d-flex align-items-center  flex-wrap">
                        <div class="px-3 mx-5 my-3">
                            <div class="d-flex justify-content-center rtl fw-bold bg-white">
                                <div class=""> جمع کل فاکتور :</div>
                                <div class="px-3"> {{ total }} تومان</div>
                            </div>
                        </div>
                        <div class="my-3 mx-5 d-flex justify-content-between rounded-3 bg-gray py-3 px-4">
                            <div class="fw-bold"> نحوه پرداخت:
                            </div>
                            <div class="px-3 d-flex">
                                <div class="mx-3">نقد <input type="checkbox" v-model="is_payment_cash"
                                        @click="paymentCashFalse = !paymentCashFalse"></div>
                                <div>چک <input type="checkbox" @click="is_payment_cash = !is_payment_cash"
                                        v-model="paymentCashFalse"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-warning" style="width: 5px !important; height: 100%;"></div>
                </div>
            </div>
            <div class="rtl">
                <div v-if="loading == true" class="d-flex  align-items-center">
                    <div class="  bg-parsian text-center text-white  px-4 pt-1 rounded-3">
                        <div class="loader-light"></div>
                    </div>
                </div>
                <button v-if="loading == false" type="submit"
                    class="border-none bg-parsian text-center text-white d-inline px-5 py-2 rounded-3 m-3">ثبت
                    نهایی</button>
            </div>
        </form>
       </div>
    </div>
</template>
  <script>
import axios from 'axios'
import Empy from '@/components/empy.vue'
export default {
    layout: "visitorCustomer",
    data() {
        return {
            data: null,
            total: 0,
            is_payment_cash: true,
            paymentCashFalse: false,
            loading: false,
        };
    },
    methods: {
        async getCartInfo() {
            this.data = null;
            await axios.get(`https://parsiancoyazd.ir/api/product/Order_retrieve/${this.$route.params.id}/`)
                .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            }).then((response) => {
                this.data = response.data[0];
            });
            this.data.products.forEach(element => {
                this.total += element.product.price * element.count;
            });
        },
        async sendData() {
            this.loading = true;
            await axios.put(`https://parsiancoyazd.ir/api/product/Update_order/${this.data.id}/`, { "is_payed": true, "is_payment_cash": this.is_payment_cash })
                .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            }).then((response) => {
                this.getCartInfo();
            });
        },
        async deleteItem(id) {
            this.loading = true;
            await axios.delete(`https://parsiancoyazd.ir/api/product/delete_order_product/${id}/`)
                .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            }).then((response) => {
                this.getCartInfo();
            });
        }
    },
    mounted() {
        this.getCartInfo();
    },
    components: { Empy }
}
</script>
  <style>
  </style>