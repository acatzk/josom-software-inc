<template>

  <div>

    <v-flex xs10>

        <v-btn 
            v-scroll='onScroll'
            v-show="fab" 
            fab 
            dark 
            fixed 
            bottom 
            right 
            class="elevation-20"
            color="primary"
            @click="toTop"
        >

          <v-icon class="iconify" data-icon="bi-chevron-up"></v-icon>

        </v-btn>

    </v-flex>

  </div>

</template>

<script>

import { mapState } from 'vuex'

export default {   

    name: 'back-top-top',

    data () {
        return {
            fab: false
        }
    },

    computed: {
        ...mapState(['mode'])
    },

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