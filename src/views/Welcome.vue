<template>
  <div class="home">

    <!-- Scroll Vertical Indicator -->
    <scroll-indicator />

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

      <!-- Recommendations -->
      <recommendations />

      <!-- Our Team -->
      <team />

      <!-- Contact Us -->
      <contact-us />

      <!-- Our Satisfied Client -->
      <clients />

      <!-- Footer Bar -->
      <foot-bar />

    </main-bar>

  </div>
</template>

<script>
export default {
  name: 'Welcome',

  components: {

    ScrollIndicator: () => import('@/components/mixins/ScrollIndicator'),

    NavBar: () => import('@/components/layouts/TheNavBar'),

    MainBar: () => import('@/components/layouts/TheMainBar'),

    Home: () => import('@/components/pages/Home'),

    About: () => import('@/components/pages/About'),

    Services: () => import('@/components/pages/Services'),

    Projects: () => import('@/components/pages/Projects'),

    Recommendations: () => import('@/components/pages/Recommendations'),

    Team: () => import('@/components/pages/Team'),

    ContactUs: () => import('@/components/pages/ContactUs'),

    Clients: () => import('@/components/pages/Clients'),

    FootBar: () => import('@/components/layouts/TheFootBar')

  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/welcome.scss"></style>