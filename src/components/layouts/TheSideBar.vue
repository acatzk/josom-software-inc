<template>
    <v-navigation-drawer
        v-model="show"
        clipped
        app
        :dark="mode ? false : true"
        :style="mode ? 'background-color: #f7f7f7' : ''"
    >
        <v-layout>
            <v-flex>
                <v-list dense>
                    <v-list-item class="justify-center">
                        <v-list-item-avatar style="height: 100px; width: 100px;">
                            <v-img 
                                src="@/assets/imgs/logo.png"
                            ></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title text-center">Josom Software, Inc.</v-list-item-title>
                            <v-list-item-subtitle class="text-center">josom@solution.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list
                        nav
                        dense
                    >
                        <div  v-for="(nav, index) in navItems" :key="index">
                            <scroll-link :href="`#${nav.to}`">
                                <v-list-item link>
                                    <v-list-item-icon>
                                        <v-icon class="iconify" :data-icon="nav.icon" :color="mode ? 'grey' : 'white'"></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-subtitle>{{ nav.text }}</v-list-item-subtitle>
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
                { icon: 'bx-bx-cube', text: 'Home', to: 'home' },
                { icon: 'ant-design:info-circle-outlined', text: 'About', to: 'about' },
                { icon: 'fa-solid:laptop-code', text: 'Services', to: 'services' },
                { icon: 'gg-work-alt', text: 'Projects', to: 'projects' },
                { icon: 'carbon-recommend', text: 'Recommendations', to: 'recommendations' },
                { icon: 'wpf-business-contact', text: 'Contact', to: 'contact' },
                { icon: 'la-users-cog-solid', text: 'Clients', to: 'client' }
            ]
        }
    }

}
</script>

<style scoped>
.drawer {
    background-color: #f7f7f7 !important;
}
</style>