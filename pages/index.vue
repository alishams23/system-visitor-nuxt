<template>
  <div class="">
    <div class="d-flex justify-content-center align-items-center mt-5 pt-5 full-height">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import headerpage from "~/components/Header.vue";
export default {
  components: { headerpage },
  computed: {
    isAuthenticated: {
      get() {
        return this.$store.state.isAuthenticated;
      }
    }
  },
  methods: {
    currentRouteName() {
      return this.$route.name;
    }, getInfo() {
      try {
        fetch(
          `https://parsiancoyazd.ir/api/account/User_retrieve/${this.$store.state.username}/`,
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${this.$store.state.token}`
            }
          }
        )
          .then(response => response.json())
          .then(data => {
            if (data.user_type == 'V') {
              this.$router.push("/Visitor/loginCustomer/");
            } else if (data.user_type == 'A') {
              this.$router.push("/Accountant/loginCustomer/");
            } else {
              this.$router.push("/login");
            }
          });
        this.$router.push("/login");

        this.loading = false;
      } catch (error) { }
    }, loginPage() {
      if (
        this.isAuthenticated == true
      ) {
        this.getInfo();
      } else {
        this.$router.push("/login");
      }
    }
  }, mounted() {
    this.loginPage()
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

.full-height {
  height: 100%;
}
</style>
