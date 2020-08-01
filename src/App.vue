<template>

  <v-app :style="mode ? 'background-color: #f4f8fc;' : 'background-color: #363636;'">

    <router-view /> <!-- DYNAMIC WEB PAGES LOAD -->

  </v-app>

</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>
<script src="@/assets/js/iconify.js"></script>

<script>

import { mapState } from 'vuex'

export default {
  name: 'app',

  computed: {
    ...mapState(['mode'])
  }
}
</script>