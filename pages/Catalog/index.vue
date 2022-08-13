<template>
  <div>
    <headerpage/>
      <aside id="sidebar" class="sidebar">
        <div class="rounded bg-parsiyan mb-5">
          <div class="d-flex flex-column justify-content-between py-2 px-2">
            <div class="d-flex justify-content-center">
              <p class="fs-6 pe-2 pt-2 fw-bold text-black">:نام ویزیتور </p>
            </div>
          </div>
        </div> 
        <ul id="sidebar-nav" class="sidebar-nav">
            <li class="nav-item">
              <a href="index.html" class="nav-link rtl text-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16" class="bi ms-2 bi-person"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path></svg>
              <span>ورود به حساب مشتریان</span>
              </a>
            </li>
            <li class="nav-item"><a href="index.html" class="nav-link rtl text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16" class="bi ms-2 bi-file-earmark"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path></svg>
              <span>کاتالوگ</span>
              </a>
            </li>
          </ul>
        </aside>
        <main id="main" class="main">
    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-12">
          <div class="row justify-content-around">
                    <div class="card mb-3 shadow col-12 col-md-3" style="width: 18rem;">
                        <img class="card-img-top img-fluid p-2" src="@/assets/img/slides-1.jpg">
                        <div class="card-body">
                            <h5 class="card-title text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>

                        </div>
                    </div>
                    <div class="card mb-3 shadow col-12 col-md-3" style="width: 18rem;">
                        <img class="card-img-top img-fluid p-2" src="@/assets/img/slides-1.jpg">
                        <div class="card-body">
                            <h5 class="card-title text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>

                        </div>
                    </div>
                    <div class="card mb-3 shadow col-12 col-md-3" style="width: 18rem;">
                        <img class="card-img-top img-fluid p-2" src="@/assets/img/slides-1.jpg">
                        <div class="card-body">
                            <h5 class="card-title text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>

                        </div>
                    </div>
                    <div class="card mb-3 shadow col-12 col-md-3" style="width: 18rem;">
                        <img class="card-img-top img-fluid p-2" src="@/assets/img/slides-1.jpg">
                        <div class="card-body">
                            <h5 class="card-title text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>

                        </div>
                    </div>
                </div>
      </div>
      </div>
    </section>

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
