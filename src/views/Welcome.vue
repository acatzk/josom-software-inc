<template>
  <div class="home">
    
    <nav-bar />

    <main-bar class="content">

      <!-- Home -->
      <home />

    </main-bar>

  </div>
</template>

<script>
export default {
  name: 'Welcome',

  components: {

    NavBar: () => import('@/components/layouts/TheNavBar'),

    Home: () => import('@/components/pages/Home'),

    MainBar: () => import('@/components/layouts/TheMainBar')

  }
}
</script>

<style scoped lang="scss" src="@/assets/scss/welcome.scss"></style>