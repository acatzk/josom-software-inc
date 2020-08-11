<template>
    <v-card 
        flat 
        class="mx-auto card-wrapper"
        max-width="100%"
        :dark="mode ? false : true"
        :style="mode ? 'background-color: #f7f7f7;' : 'background-color: #363636;'"
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

            <vue-horizontal-list :items="items" class="mx-4">
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
                                <v-card-subtitle class="text-justify text-capitalize">
                                    {{ item.speech }}
                                </v-card-subtitle>
                            </v-flex>

                            <v-divider class="mr-6"></v-divider>
                         
                            <v-card-actions class="d-flex justify-space-around">
                                <v-tooltip top color="#4267B2">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon
                                            :color="mode ? '#4267B2' : ''"
                                            v-on="on"
                                            v-bind="attrs"
                                            :href="item.fbLink"
                                            target="_blank"
                                            v-show="item.fbLink"
                                        >
                                            <v-icon>mdi-facebook</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>
                                        <v-icon left color="white">mdi-facebook</v-icon> Facebook
                                    </span>
                                </v-tooltip>
                                <v-tooltip top color="#1DA1F2">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            icon
                                            :color="mode ? '#1DA1F2' : ''"
                                            :href="item.twitterLink"
                                            v-on="on"
                                            v-bind="attrs"
                                            v-show="item.twitterLink"
                                            target="_blank"
                                        >
                                            <v-icon>mdi-twitter</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>
                                        <v-icon left color="white">mdi-twitter</v-icon> Twitter
                                    </span>
                                </v-tooltip>
                                <v-tooltip top color="#333">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            :href="item.githubLink"
                                            icon
                                            :color="mode ? '#333' : ''"
                                            v-on="on"
                                            v-bind="attrs"
                                            target="_blank"
                                            v-show="item.githubLink"
                                        >
                                            <v-icon>mdi-github</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>
                                        <v-icon left color="white">mdi-github</v-icon> Github
                                    </span>
                                </v-tooltip>
                            </v-card-actions>

                        </v-container>
                        
                        
                    </v-card>
                </template>
            </vue-horizontal-list>

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'our-team',

    data () {
        return {
            items: [
                {
                    name: 'Joshua Galit',
                    position: 'CEO | Founder',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://avatars0.githubusercontent.com/u/38458781?s=460&u=d2e21173ef861da3d8ca3a292398cbc0c6f7c000&v=4',
                    fbLink: 'https://www.facebook.com/profile.php?id=100016207784852',
                    githubLink: 'https://github.com/acatzk',
                    twitterLink: 'https://twitter.com/angryboy_19'
                },
                {
                    name: 'Jerome Villaruel',
                    position: 'CEO | Co-Founder',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://avatars0.githubusercontent.com/u/26340308?s=460&u=bfa907f2fee8b19b3d7d9ebde07cfe0f33215b19&v=4',
                    fbLink: 'https://www.facebook.com/villarueljerome',
                    githubLink: 'https://github.com/veoscript',
                    twitterLink: 'https://twitter.com/VeoScript43'
                },
                {
                    name: 'Gilchrist Calunia',
                    position: 'Software Engineer',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://avatars1.githubusercontent.com/u/65806779?s=460&u=03752090c3e22f46c1b7759b59daf1d871aada85&v=4',
                    fbLink: 'https://www.facebook.com/gilchrist.calunia',
                    githubLink: 'https://github.com/Gilchrist32',
                    twitterLink: ''
                },
                {
                    name: 'Jayson Mendez',
                    position: 'Software Engineer',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/110626580_1260436864295362_2053575148658777030_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=G_xO2srXQRwAX-ICkHp&_nc_ht=scontent.fmnl8-1.fna&oh=97ba20be646370268017e8a5110439ee&oe=5F578718',
                    fbLink: 'https://www.facebook.com/gilchrist.calunia',
                    githubLink: '',
                    twitterLink: ''
                },
                {
                    name: 'Jerwin Gilo',
                    position: 'Software Engineer',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/79453065_2793550230684284_3089180640969490432_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=87jX3QbsTwcAX98nc8K&_nc_ht=scontent.fmnl8-1.fna&oh=96cbd4cd3dfa34ec8ba096e64b4a41b3&oe=5F5798B3',
                    fbLink: 'https://www.facebook.com/menjhayz',
                    githubLink: '',
                    twitterLink: ''
                }
            ]
        }
    },

    computed: {
        ...mapState(['mode'])
    },

    components: {
        VueHorizontalList: () => import('vue-horizontal-list')
    },
    
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