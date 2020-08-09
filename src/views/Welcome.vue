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

      <!-- Recommendations -->
      <recommendations />

      <!-- Our Team -->
      <our-team />

      <!-- Contact Us -->
      <contact-us />

      <!-- Our Satisfied Client -->
      <our-clients />

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

    Recommendations: () => import('@/components/pages/Recommendations'),

    OurTeam: () => import('@/components/pages/OurTeam'),

    ContactUs: () => import('@/components/pages/ContactUs'),

    OurClients: () => import('@/components/pages/OurClients'),

    FootBar: () => import('@/components/layouts/TheFootBar')

  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/welcome.scss"></style>