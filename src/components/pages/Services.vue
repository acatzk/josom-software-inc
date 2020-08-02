<template>
    <v-card
        class="mx-auto"
        flat
        id="services"
        :dark="mode ? false : true"
    >
        <v-container>
            <h1>Services</h1>
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

<style scoped>
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 100vh;
    padding-top: 50px;
}
</style>