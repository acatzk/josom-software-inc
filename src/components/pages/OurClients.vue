<template>
    <v-card 
        flat 
        id="client"
        class="mx-auto"
        :dark="mode ? false : true"
        :style="mode ? 'background-color: #f7f7f7;' : 'background-color: #363636;'"
    >
        <v-container>
            <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    CLIENTS
                </div>
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>OUR SATISFIED CLIENTS</h2>
                </v-card-text>
            </v-flex>

            <vue-horizontal-list :items="items" class="mx-4">
                <template v-slot:default="{item}">
                    <v-img
                        height="200px"
                        :src="item.image"
                        class="white--text align-end"
                        :lazy-src="item.image"
                    >
                    </v-img>
                </template>
            </vue-horizontal-list>

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'our-clients',

    data () {
        return {
            items: [
                {
                    image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/8865/brand.gif?itok=NMrbptII'
                },
                {
                    image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042012/mang-inasal-logo1.jpg?itok=O_ztSdvT'
                },
                {
                    image: 'https://i.ytimg.com/vi/394VjIrmgaY/maxresdefault.jpg'
                },
                {
                    image: 'https://fontmeme.com/images/red-ribbon-logo.png'
                },
                {
                    image: 'https://seeklogo.com/images/B/Burger_King-logo-67A54F414B-seeklogo.com.png'
                },
                {
                    image: 'https://mallfoodonabudget.files.wordpress.com/2013/08/chow-king.png?w=584'
                }
            ]
        }
    },

    computed: {
        ...mapState(['mode'])
    },

    components: {
        VueHorizontalList: () => import('vue-horizontal-list')
    }
    
}

</script>

<style scoped>
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 60vh;
    padding-top: 50px;
}
h2 {
    font-size: 2.2rem;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
</style>