<template>
    <v-card 
        flat 
        class="mx-auto card-wrapper"
        max-width="100%"
        :dark="mode ? false : true"
        :style="mode ? 'background-color: rgb(251 253 255);' : 'background-color: #363636;'"
    >
        <v-container>
            <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    PROFESSIONALS
                </div>
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>OUR TEAM</h2>
                </v-card-text>
            </v-flex>

            <horizontal-list :items="items" class="mx-4">
                <template v-slot:default="{item}">
                    <v-card
                        class="mx-auto elevation-7"
                        max-width="500"
                    >
                        <v-container class="text-center">
                            <v-flex>
                                <v-badge
                                    bordered
                                    bottom
                                    color="success"
                                    dot
                                    offset-x="42"
                                    offset-y="25"
                                >
                                    <v-avatar 
                                        size="140px" 
                                        class="mr-5 elevation-2"
                                    >
                                        <v-img
                                            :src="item.image"
                                            :lazy-src="item.image"
                                            aspect-ratio="1"
                                        >
                                            <template v-slot:placeholder>
                                                <v-row
                                                    class="fill-height ma-0"
                                                    align="center"
                                                    justify="center"
                                                >
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img> 
                                    </v-avatar>
                                </v-badge>
                            </v-flex>

                            <v-flex class="mt-2 mr-5">
                                <span class="company-name mb-1 text-uppercase font-weight-lighter">{{ item.name }}</span>
                                <div class="subtitle text-uppercase font-weight-bold">{{ item.position }}</div>
                                <v-card-subtitle class="text-center text-capitalize">
                                    {{ item.speech }}
                                </v-card-subtitle>
                            </v-flex>

                            <v-divider class="mr-6"></v-divider>

                        </v-container>

                        <social-link-buttons :item="item"/>
                        
                        
                    </v-card>
                </template>
            </horizontal-list>

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

import teams from '@/static/teams.json'

export default {
    name: 'our-team',

    data () {
        return {
            items: []
        }
    },

    computed: {
        ...mapState(['mode'])
    },

    components: {
        HorizontalList: () => import('vue-horizontal-list'),
        SocialLinkButtons: () => import('@/components/mixins/SocialLinkButtons')
    },
    
    created () {
        let teamData = teams.teams
        return this.items.push(...teamData)
    }
}

</script>

<style scoped>
.card-wrapper {
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