<template>

    <div class="the-nav-bar">

        <v-app-bar
            app
            :color="mode ? '#f0f0f0' : ''"
            flat
            dense
            clipped-left
            :dark="mode ? false : true"
            hide-on-scroll
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

            <v-list-item-avatar 
                @click.prevent="scroll" 
                style="cursor: pointer; width: 20px;"
            >
                <v-img 
                    :src="getbusinessLogo(mode)"
                ></v-img>
            </v-list-item-avatar>

            <v-spacer></v-spacer>

            <v-switch
                class="mt-5"
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
        getbusinessLogo (mode) {
            return mode ? require('@/assets/imgs/brand/logo-dark.png') : require('@/assets/imgs/brand/logo-light.png')
        },
        scroll() {
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' })        
        }
    }
}
</script>