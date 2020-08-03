<template>
  <div id="app">
    <v-flex xs10>
        <v-btn v-scroll='onScroll' v-show="fab" fab dark fixed bottom right color="#FFC400" @click="toTop">
          <v-icon>arrow_circle_up</v-icon>
        </v-btn>
    </v-flex>
  </div>
</template>
<script>
export default {
  data: () => ({
    fab:false
  }),
  methods:{
    onScroll (e) {
      if(typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 10
    },
    toTop (){
      this.$vuetify.goTo(0)
    }
  }
}
</script>>