<template>
    <v-card 
        flat 
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
        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'our-clients',

    computed: {
        ...mapState(['mode'])
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