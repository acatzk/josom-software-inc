<template>
    <v-card 
        flat 
        id="client"
        class="mx-auto"
        :dark="mode ? false : true"
        :style="mode ? 'background-color: rgb(251 253 255);' : 'background-color: #363636;'"
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

            <horizontal-list :items="items" class="mx-4" data-aos="fade-left">
                <template v-slot:default="{item}">
                    <v-img
                        height="200px"
                        :src="item.image"
                        class="white--text align-end"
                        :lazy-src="item.image"
                    >
                    </v-img>
                </template>
            </horizontal-list>

        </v-container>
    </v-card>
</template>

<script>

    import { mapState } from 'vuex'

    import clients from '@/static/clients'

    export default {
        name: 'our-clients',

        data () {
            return {
                items: []
            }
        },

        computed: {
            ...mapState(['mode'])
        },

        components: {
            HorizontalList: () => import('vue-horizontal-list')
        },

        created () {
            let clientData = clients.clients
            return this.items.push(...clientData)
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