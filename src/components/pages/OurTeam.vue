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

                        </v-container>

                        <social-media-links :item="item"/>
                        
                        
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
                },
                {
                    name: 'Christian Bongalan',
                    position: 'Software Engineer',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/74205777_446012632997493_777782435155804160_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=xKkfdmEKuOwAX9znXGI&_nc_ht=scontent.fmnl8-1.fna&oh=13f0f18b3846a2237a2befedc1730ed9&oe=5F5A1643',
                    fbLink: 'https://www.facebook.com/christianrommel.reyes.31',
                    githubLink: '',
                    twitterLink: ''
                },
                 {
                    name: 'Jey Rexon Libato',
                    position: 'Software Engineer',
                    speech: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita illo dignissimos optio consequuntur met voluptatum?',
                    image: 'https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.0-9/70303449_2185451815079356_3517642107357495296_n.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=cebXuvq21CEAX8ulWJh&_nc_oc=AQlDqE_edM4oopBQYkB5TqG8Cdggt1rJmo3-kuS3bhiOat3xL8amrz4J_UVrmjiGc2M&_nc_ht=scontent.fmnl8-1.fna&oh=397115bbf81aad30eec502e485f206b8&oe=5F5A0A53',
                    fbLink: 'https://www.facebook.com/jeyrexonlibato16/',
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
        VueHorizontalList: () => import('vue-horizontal-list'),
        SocialMediaLinks: () => import('@/components/mixins/SocialMediaLinks')
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