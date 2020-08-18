<template>
    <v-card id="recommendations" :dark="mode ? true : true">

        <v-container>
             <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    MY TRUE HAPPINESS
                </div>
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>RECOMMENDATIONS</h2>
                </v-card-text>
            </v-flex>

            <carousel-3d width="500" height="500" :autoplay="true" :autoplay-timeout="2400">
                <div v-for="(item, index) in items" :key="index">
                    <slide :index="item.id">
                        <img src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/118074586_1078672019288834_6769038450289390241_n.png?_nc_cat=102&_nc_sid=ae9488&_nc_ohc=0EBZek8i9KoAX-LbGDI&_nc_ht=scontent.fmnl9-1.fna&oh=3a1acfba13b0dab1e94002fd96dc6f1b&oe=5F61001B"/>
                    </slide>
                </div>
            </carousel-3d>

        </v-container>

    </v-card>
</template>

<script>

    import { mapState } from 'vuex'

    import recommendations from '@/static/recommendations'

    export default {
        name: 'recommendations',

        data () {
            return {
                items: []
            }
        },

        computed: {
            ...mapState(['mode'])
        },

        created () {
            let recommendData = recommendations.recommendations
            return this.items.push(...recommendData)
        }
    }
</script>

<style scoped>
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    height: 100vh;
    background-image: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, .6)), url('../../assets/imgs/recommends/recommend-bg-1.jpg');
    background-size: cover;
    padding-top: 50px;
    background-attachment: fixed;
}
h2 {
    font-size: 2.2rem;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    margin: 0;
    text-shadow: 2px 2px rgb(39, 39, 39);
}
.carousel-3d-slide {
    height: auto !important;
    background-color: rgba(0, 0, 0, 0.25) !important;
}
</style>
