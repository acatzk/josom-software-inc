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
            <horizontal-list />

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'projects',

    computed: {
        ...mapState(['mode'])
    },

    components: {
        CardCarousel: () => import('@/components/mixins/CardCarousel'),
        HorizontalList: () => import('@/components/mixins/HorizontalList')
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