<template>

    <div class="the-nav-bar">

        <v-app-bar
            app
            :color="mode ? 'white' : ''"
            :elevate-on-scroll="mode ? true : false"
            :flat="mode ? false : true"
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

            <v-toolbar-title class="d-flex">
                <v-icon>mdi-lumx</v-icon> Josom
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn 
                icon
                @click.stop="$store.dispatch('darkMode')"
            >
                <v-icon 
                >{{ mode ? 'mdi-lightbulb' : 'mdi-lightbulb-outline' }}</v-icon>
            </v-btn>

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
    }
}
</script>