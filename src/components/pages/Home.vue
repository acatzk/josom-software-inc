<template>
    <v-card
        class="mx-auto"
        flat
        id="home"
    >
        <v-img
            class="white--text"
            height="100vh"
            src="@/assets/imgs/home.jpg"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
        >
            <v-container
                class="fill-height"
                fluid
            >
                <v-row>
                    <v-col 
                        cols="12" 
                        align="center"
                        justify="center"
                    >
                        <div class="title font-weight-bold text-uppercase">
                            Making great things possible
                        </div>
                        <div class="subtitle mt-5 font-weight-light">
                            Josom Software, Inc.
                        </div>
                        <v-btn
                            depressed
                            color="blue"
                            class="white--text mt-5"
                            x-large
                            @click.prevent="scroll"
                        >
                            DISCOVER MORE <v-icon right>mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </v-card>
</template>

<script>
export default {
    name: 'home',

    methods: {
        scroll() {
            document.querySelector('#about')
                    .scrollIntoView({ behavior: 'smooth' })            
        }
    }
}
</script>

<style scoped lang="scss">
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0 !important;

    .title {
        font-size: 38px !important;
    }
    .subtitle {
        font-size: 20px !important;
    }
}
</style>