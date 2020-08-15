<template>
    <v-container>
        <vue-horizontal-list :items="items">
            <template v-slot:default="{item}">
                <v-card
                    class="mx-auto"
                    max-width="500"
                >
                    <v-img
                        height="200px"
                        :src="item.image"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                        <h4 class="ml-3">Year {{  item.projectYear}}</h4>
                    </v-img>
                    
                    <v-card-title>{{ item.title }}</v-card-title>

                    <v-card-subtitle class="text-justify">
                        {{ item.content }}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn 
                            depressed
                            small
                            text
                        >
                           <v-icon left>mdi-web</v-icon> Demo
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </vue-horizontal-list>
    </v-container>
</template>

<script>

import Vue from 'vue'

import { mapState } from 'vuex'

import { toastAlertStatus } from '@/utils'

import axios from 'axios'

import projects from '@/static/projects.json'

export default Vue.extend({

    name: 'horizontal-list',

    components: {
        VueHorizontalList: () => import('vue-horizontal-list')
    },

    computed: {
        ...mapState(['mode'])
    },

    data() {
        return {
            items: []
        }
    },

    created () {
        let projectData = projects.projects
        return this.items.push(...projectData)
    }
})
</script>