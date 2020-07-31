<template>

    <div class="the-nav-bar">

        <v-app-bar
            app
            color="white"
            elevate-on-scroll
            clipped-left
        >
            <v-btn 
                icon
                @click="drawer = !drawer"
            >
                <v-icon class="iconify" data-icon="heroicons-outline:menu-alt-4"></v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-toolbar-title class="d-flex" icon>
                <v-icon class="iconify" data-icon="mdi-cube-send"></v-icon> Josom
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon class="iconify" data-icon="ic-outline-brightness-5"></v-icon>
            </v-btn>

        </v-app-bar>

        <the-side-bar 
            :visible="drawer" @close="drawer = false"
        />

    </div>

</template>


<script>
export default {
    name: 'the-nav-bar',

    data () {
        return {
            drawer: true
        }
    },

    components: {
        TheSideBar: () => import('./TheSideBar')
    }
}
</script>