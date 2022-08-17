<template>
  <div>
    <table class="table rtl bg-white table-bordered">
      <thead>
        <tr>
          <th scope="col"> ردیف</th>
          <th scope="col">نام کالا</th>
          <th scope="col">تعداد</th>
          <th scope="col">قیمت واحد</th>
          <th scope="col">جمع کل</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>چای</td>
          <td>10</td>
          <td>25000</td>
          <td>250000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>قند</td>
          <td>40</td>
          <td>17000</td>
          <td>255000</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>آب</td>
          <td>15</td>
          <td>2200</td>
          <td>31200</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>بستنی</td>
          <td>15</td>
          <td>17000</td>
          <td>255000</td>
        </tr>
      </tbody>
</table>
<table class="table rtl bg-white table-bordered">
      <thead>
        <tr>
        <th scope="col">
          <div class="d-flex justify-content-center rtl fw-bold bg-white">
            <div class="">  جمع کل فاکتور :</div>
            <div class=""> 5455000 تومان</div>
          </div>
        </th>
          <th scope="col" class=" d-flex justify-content-between"> 
          نحوه پرداخت:    
          <div>
            <div class=" d-inline px-5"><input type="radio" name="payment">چک</div>
            <div class=" d-inline px-5"><input type="radio" name="payment">نقد</div>
          </div>
          </th>
        </tr>
      </thead>
</table>      


<div class=" d-flex justify-content-center">
<button  type="submit" class=" btn px-5 bg-parsiyan text-white">ثبت</button>
</div>


  </div>
</template>

<script>
export default {
      layout: "customer",


}
</script>

<style>

</style>