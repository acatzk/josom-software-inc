<template>
    <v-navigation-drawer
        v-model="show"
        clipped
        app
        :dark="mode ? false : true"
        :class="mode ? 'nav-drawer' : undefined"
    >
        <v-layout>
            <v-flex>
                <v-list dense>
                    <v-list-item class="justify-center mt-12">
                        <v-img 
                            max-width="160"
                            style="cursor: pointer;"
                            @click.prevent="scroll" 
                            :src="getBrandLogo()"
                        ></v-img>
                    </v-list-item>
                    

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="text-center text-title font-weight-normals">Josom Software, Inc.</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider class="mx-4"></v-divider>

                    <v-list
                        nav
                        dense
                    >
                        <div  v-for="(nav, index) in navItems" :key="index">
                            <scroll-link :href="`#${nav.to}`">
                                <v-list-item link>
                                    <v-list-item-icon>
                                        <v-icon>{{ nav.icon }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>{{ nav.text }}</v-list-item-title>
                                </v-list-item>
                            </scroll-link>
                        </div>
                    </v-list>
                </v-list>
            </v-flex>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        name: 'the-side-bar',

        props: ['visible'],

        components: {
            ScrollLink: () => import('@/components/mixins/ScrollLink')
        },

        computed: {
        show: {
            get () {
            return this.visible
            },
            set (value) {
            if (!value) {
                this.$emit('close')
            }
            }
        },
        ...mapState(['mode'])
        },

        data () {
            return {
                navItems: [
                    { icon: 'mdi-cube-outline', text: 'Home', to: 'home' },
                    { icon: 'mdi-information-outline', text: 'About', to: 'about' },
                    { icon: 'mdi-code-tags', text: 'Services', to: 'services' },
                    { icon: 'mdi-laptop-mac', text: 'Projects', to: 'projects' },
                    { icon: 'mdi-ribbon', text: 'Recommendations', to: 'recommendations' },
                    { icon: 'mdi-account-box-outline', text: 'Contact', to: 'contact' },
                    { icon: 'mdi-account-multiple-outline', text: 'Clients', to: 'client' }
                ]
            }
        },

        methods: {
            getBrandLogo (mode) {
                return require('@/assets/imgs/brand/brand-logo.png')
            }
        }

    }
</script>

<style scoped>
.text-title {
    font-family: 'Teko', sans-serif !important;
    font-stretch: expanded !important; 
    font-size: 1.3rem !important;
}
.nav-drawer {
    background-color: rgb(235 243 253);
}
</style>