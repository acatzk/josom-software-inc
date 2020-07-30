<template>
  <div class="home">
    
    <nav-bar />

    <main-bar>

      <v-container>

        <router-view />

      </v-container>

    </main-bar>

  </div>
</template>

<script>
export default {
  name: 'Welcome',

  components: {

    NavBar: () => import('@/layouts/TheNavBar'),

    MainBar: () => import('@/layouts/TheMainBar')

  }
}
</script>

<style scoped src="@/assets/scss/welcome.scss"></style>