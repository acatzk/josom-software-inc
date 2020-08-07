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

            <carousel3d />

        </v-container>

    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'recommendations',

    components: {
        Carousel3d: () => import('@/components/mixins/Carousel3d')
    },

    computed: {
        ...mapState(['mode'])
    }
}
</script>

<style scoped>
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    height: 100vh;
    background-image: linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, .6)), url('../../assets/imgs/bg4.jpg');
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
</style>