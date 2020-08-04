<template>
    <v-card
        class="mx-auto"
        flat
        id="home"
    >
        <v-container
            class="fill-height"
            fluid
            style="position: absolute;"
        >
            <v-row>
                <v-col 
                    cols="12" 
                    align="center"
                    justify="center"
                >
                    <h1 class="text-uppercase white--text">
                        Making great things possible
                    </h1>
                    <span class="white--text">
                        Josom Software, Inc.
                    </span> 
                    <br>
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

        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            linesColor="#fff"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="5"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            style="height: 100vh;"
            class="particles"
        >
        </vue-particles>
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
    text-align: center;

    h1 {
        font-size: 38px !important;
    }
    span {
        font-size: 20px !important;
    }

}

.particles {
    background-image: linear-gradient(rgba(80, 80, 80, 0.5), rgba(0, 0, 0, .5)), url("../../assets/imgs/home.jpg");
    background-size: cover;

}

</style>