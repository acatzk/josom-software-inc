<template>

  <v-app :style="mode ? 'background-color: #f7f7f7;' : 'background-color: #363636;'">

    <router-view /> <!-- DYNAMIC WEB PAGES LOAD -->

    <scroll-to-top /> <!-- BACK TO TOP BUTTON -->

  </v-app>

</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>
<script src="@/assets/js/iconify.js"></script>

<script>

  import { mapState } from 'vuex'

  export default {
    name: 'app',

    components: {
      ScrollToTop: () => import('@/components/mixins/ScrollToTop')
    },

    computed: {
      ...mapState(['mode'])
    }
  }
</script>