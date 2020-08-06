<template>
    <v-card
        class="mx-auto services"
        flat
        id="services"
        :style="mode ? 'background-color: #f7f7f7;' : 'background-color: #363636;'"
        :dark="mode ? false : true"
    >
        <v-container>

            <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    WHAT WE DO
                </div>
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>OUR SERVICES</h2>
                </v-card-text>
            </v-flex>

            <div class="elevation-0">
                <v-row class="d-flex justify-space-between">

                    <v-col cols="12" sm="4">
                        <v-card
                            :dark="mode ? false : true"
                            style="min-height: 70vh;"
                            hover
                            flat
                            router
                            to="/"
                        >
                            <v-container>
                               
                            </v-container>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <v-card
                            :dark="mode ? false : true"
                            style="min-height: 70vh;"
                            hover
                            flat
                        >
                            <v-container>
                               
                            </v-container>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <v-card
                            :dark="mode ? false : true"
                            style="min-height: 70vh;"
                            hover
                            flat
                        >
                            <v-container>
                               
                            </v-container>
                        </v-card>
                    </v-col>
                
                </v-row>
            </div>

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'about',

    computed: {
        ...mapState(['mode'])
    }
}
</script>

<style scoped lang="scss">
.services {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
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