<template>
    <v-card
        class="mx-auto projects"
        flat
        id="projects"
        :dark="mode ? false : true"
    >
        <v-container>

            <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    PORTFOLIO
                </div>
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>OUR PROJECTS</h2>
                </v-card-text>
            </v-flex>

            <!-- <card-carousel /> -->
            <v-container>
                <horizontal-list :items="items">
                    <template v-slot:default="{ item }">
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
                </horizontal-list>
            </v-container>

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

import projects from '@/static/projects.json'

export default {
    name: 'projects',

    data() {
        return {
            items: []
        }
    },

    components: {
        CardCarousel: () => import('@/components/mixins/CardCarousel'),
        HorizontalList: () => import('@/components/mixins/HorizontalList')
    },

    computed: {
        ...mapState(['mode'])
    },

    created () {
        let projectData = projects.projects
        return this.items.push(...projectData)
    }
}
</script>

<style scoped>
.projects {
    min-height: 100vh;
    padding-top: 50px;
}
h2 {
    font-size: 2.2rem;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
</style>