<template>
  <div>
    <header id="header" class="header fixed-top d-flex align-items-center">

      <div class="d-flex align-items-center justify-content-between">
        <div class="logo d-flex align-items-center">

          <!-- <span class="d-none d-lg-block">پخش پارسیان</span> -->
        </div>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div><!-- End Logo -->



      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">



          <!-- <li class="nav-item dropdown  me-3">

            <a class="nav-link nav-profile d-flex align-items-center  p-1 rounded-pill">

              <div class="rounded-pill p-2 bg-gray">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path opacity="0.4"
                    d="M9.55493 20.8518C10.0542 21.4785 10.7874 21.884 11.5922 21.9788C12.3971 22.0735 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518"
                    stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


              </div>

              <span class="badge bg-primary badge-number">4</span>
            </a>


          </li> -->



          <li class="nav-item dropdown pe-3" v-if="data">

            <a class="nav-link nav-profile d-flex align-items-center pe-0 border p-1 rounded-pill" href="#"
              data-bs-toggle="dropdown">
              <div class="rounded-pill p-2 bg-gray">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9968 15.1746C7.68382 15.1746 3.99982 15.8546 3.99982 18.5746C3.99982 21.2956 7.66082 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z"
                    fill="#200E32" />
                  <path opacity="0.4"
                    d="M11.9968 12.5837C14.9348 12.5837 17.2888 10.2287 17.2888 7.2917C17.2888 4.3547 14.9348 1.9997 11.9968 1.9997C9.05983 1.9997 6.70483 4.3547 6.70483 7.2917C6.70483 10.2287 9.05983 12.5837 11.9968 12.5837Z"
                    fill="#200E32" />
                </svg>
              </div>
              <span class=" dropdown-toggle px-3">{{data.username}}</span>
            </a><!-- End Profile Iamge Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li class="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i class="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i class="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                  <i class="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>

            </ul><!-- End Profile Dropdown Items -->
          </li><!-- End Profile Nav -->

        </ul>
      </nav><!-- End Icons Navigation -->

    </header><!-- End Header -->
  </div>
</template>

<script>
export default {
props:["data"]
}
</script>

<style>
</style>