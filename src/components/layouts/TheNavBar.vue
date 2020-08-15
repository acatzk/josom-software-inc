<template>

    <div class="the-nav-bar">

        <v-app-bar
            app
            :color="mode ? '#fff' : ''"
            flat
            dense
            clipped-left
            :dark="mode ? false : true"
        >
            <v-btn 
                icon
                @click="drawer = !drawer"
            >
                <v-icon 
                    class="iconify" 
                    data-icon="heroicons-outline:menu-alt-4"
                ></v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-img 
                max-width="100"
                style="cursor: pointer;"
                @click.prevent="scroll" 
                :src="getbusinessLogo()"
            ></v-img>

            <v-spacer></v-spacer>

            <v-switch
                class="mt-5"
                inset
                dense
                @change="$store.dispatch('darkMode')"
            ></v-switch>

        </v-app-bar>

        <the-side-bar 
            :visible="drawer" @close="drawer = false"
            :mode="mode"
        />

    </div>

</template>


<script>

import { mapState } from 'vuex'

export default {
    name: 'the-nav-bar',

    data () {
        return {
            drawer: true
        }
    },

    components: {
        TheSideBar: () => import('./TheSideBar')
    },

    computed: {
        ...mapState(['mode'])
    },

    methods: {
        getbusinessLogo () {
            return require('@/assets/imgs/brand/brand-logo.png')
        },
        scroll() {
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })        
        }
    }
}
</script>