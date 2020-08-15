<template>
    <div class="wrap-banner" id="home">
      <div class="main-title">
        <h2 class="text-uppercase">
          Making great things possible
        </h2>
        <p class="subtitle">
          Josom Software, Inc.
        </p>
        <br>
        <v-btn
            depressed
            :color="mode ? 'blue' : 'error'"
            class="white--text mt-5"
            x-large
            @click.prevent="scroll"
            rounded
        >
            DISCOVER MORE <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>

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
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'home',

    methods: {
        scroll() {
            document.querySelector('#about')
                    .scrollIntoView({ behavior: 'smooth' })            
        }
    },

    computed: {
        ...mapState(['mode'])
    }
}
</script>

<style scoped lang="scss">

.wrap-banner {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .main-title {
        position: absolute;
        text-align: center;

        h2 {
            font-size: 4rem !important;
            font-family: 'Teko', sans-serif !important;
            text-shadow: 2px 3px #000000;
            text-transform: uppercase;
            margin: 0 !important; 
            @media (max-width: 767px) {
                font-size: 3rem !important;
            }
        }

        p.subtitle {
            font-size: 1.7rem;
            margin: 0;
            @media (max-width: 767px) {
                font-size: 1rem;
            }
        }
    }

    .particles {
        background-image: linear-gradient(rgba(80, 80, 80, 0.5), rgba(0, 0, 0, .5)), url("../../assets/imgs/home.jpg");
        background-size: cover;
        width: 100%;
    }
}


</style>