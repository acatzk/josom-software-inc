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

            <v-container>
                <horizontal-list :items="items">
                    <template v-slot:default="{ item }">
                        <v-card
                            class="mx-auto"
                            max-width="500"
                            height="400"
                            flat
                            outlined
                        >
                            <v-img
                                height="200px"
                                :src="item.image"
                                :lazy-src="item.image"
                            >
                            </v-img>
                            
                            <v-card-title class="text-left">{{ item.title }}</v-card-title>
                        
                            <v-card-subtitle class="text-justify">
                                {{ item.content }}
                            </v-card-subtitle>
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
            HorizontalList: () => import('vue-horizontal-list')
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