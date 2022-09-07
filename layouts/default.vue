<template>
  <nuxt />
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit("onStart");
  },
}
</script>

<style>

</style>