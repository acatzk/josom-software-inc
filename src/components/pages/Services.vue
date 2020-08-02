<template>
    <v-card
        class="mx-auto services"
        flat
        id="services"
        :style="mode ? 'background-color: #f7f7f7;' : 'background-color: #363636;'"
        :dark="mode ? false : true"
    >
        <v-container>

            <div class="font-weight-normal text-uppercase subtitle text-center what mt-2">
                WHAT WE DO
            </div>
            <v-card-text class="font-weight-bold text-uppercase title text-center our">
                OUR SERVICES
            </v-card-text>


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
                            class="elevation-5"
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
                            class="elevation-5"
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
                            class="elevation-5"
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

</style>