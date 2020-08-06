<template>
  <div class="home">
    
    <!-- Navigation Bar -->
    <nav-bar />

    <main-bar>

      <!-- Home -->
      <home />

      <!-- About -->
      <about />

      <!-- Services -->
      <services />

      <!-- Projects -->
      <projects />

      <!-- Footer Bar -->
      <foot-bar />

    </main-bar>

  </div>
</template>

<script>
export default {
  name: 'Welcome',

  components: {

    NavBar: () => import('@/components/layouts/TheNavBar'),

    MainBar: () => import('@/components/layouts/TheMainBar'),

    Home: () => import('@/components/pages/Home'),

    About: () => import('@/components/pages/About'),

    Services: () => import('@/components/pages/Services'),

    Projects: () => import('@/components/pages/Projects'),

    FootBar: () => import('@/components/layouts/TheFootBar')

  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/welcome.scss"></style>