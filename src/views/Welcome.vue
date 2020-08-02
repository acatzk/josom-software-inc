<template>
  <div class="home">
    
    <nav-bar />

    <main-bar>

      <!-- Home -->
      <home />

      <!-- About -->
      <about />

      <!-- Services -->
      <services />

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

    Services: () => import('@/components/pages/Services'),

    About: () => import('@/components/pages/About')

  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/welcome.scss"></style>