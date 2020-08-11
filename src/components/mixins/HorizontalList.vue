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
            items: [
                {
                title: 'Proin pharetra',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex',
                image: 'https://picsum.photos/id/1039/600/600',
                projectYear: '2020'
                },
                {
                title: 'Cras pharetra',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada ',
                image: 'https://picsum.photos/id/1042/600/600',
                projectYear: '2020'
                },
                {
                title: 'Proin vulputate',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla',
                image: 'https://picsum.photos/id/1044/600/600',
                projectYear: '2020'
                },
                {
                title: 'Maecenas feugiat ',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet ',
                image: 'https://picsum.photos/id/1057/600/600',
                projectYear: '2020'
                },
                {
                title: 'Donec commodo',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu condimentum',
                image: 'https://picsum.photos/id/1063/600/600',
                projectYear: '2020'
                },
                {
                title: 'In bibendum u',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae',
                image: 'https://picsum.photos/id/1076/600/600',
                projectYear: '2020'
                },
                {
                title: 'Phasellus iac',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis quam ',
                image: 'https://picsum.photos/id/1083/600/600',
                projectYear: '2020'
                },
            ]
        }
    }
})
</script>