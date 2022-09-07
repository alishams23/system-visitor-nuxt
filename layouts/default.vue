<template>
  <div class="">
    <div class="d-flex justify-content-center align-items-center mt-5 pt-5 full-height" >
      <div class="loader"></div>
    </div>
    <div v-if="allow==true"><nuxt></nuxt></div>
  </div>
</template>

<script>
import headerpage from "~/components/Header.vue";
export default {
  components: { headerpage },
  data(){return{allow:false}},
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
    },getInfo() {
      try {
        fetch(
          `https://treaget.com/api/UserRetrieveApi/${this.$store.state.username}/`,
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
            this.$store.commit("getUser", data);
          });
        this.loading = false;
      } catch (error) {}
    },loginPage() {
      if (
        this.isAuthenticated == true ||this.$route.name == "login" 
      ) {
        this.allow = true;
        this.getInfo();
      } else {
        this.$router.push("/login");
      }
    }
  },mounted(){
    this.loginPage()
  },beforeMount() {
    this.$store.commit("onStart");
  },watch: {
    $route(to, from) {
      this.loginPage();
    }
  },
};
</script>

<style scoped>
  html, body {
  height: 100%;
}

.full-height {
  height: 100%;
}

</style>
