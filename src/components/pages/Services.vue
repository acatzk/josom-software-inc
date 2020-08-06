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

            <v-row 
                class="d-flex justify-space-between"
            >
                <v-col 
                    cols="12" 
                    sm="4" 
                    v-for="service in services" :key="service.number" 
                >
                    <v-card
                        :dark="mode ? false : true"
                        flat
                        :class="`bg-image-${service.number}`"
                    >
                        <v-container>
                            <div class="number">
                                {{ service.number }}
                            </div>
                            <h5 :style="mode ? 'color: #5c9ddd' : 'color: #5c9ddd'">
                                {{ service.title }}
                            </h5>
                            <p class="text-justify">
                                {{ service.description }}
                            </p>
                        </v-container>
                    </v-card>
                </v-col>
            
            </v-row>

        </v-container>
    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'services',

    data () {
        return {
            services: [
                {
                    number: '01',
                    title: 'Software Development',
                    description: 'We engineer and build software, web and mobile applications, APIs and more. Our team is experienced with modern technologies and programming languages. Our processes are effective and lean.'
                },
                {
                    number: '02',
                    title: 'UX and UI Design',
                    description: 'We design beautiful, functional and purposeful apps, webapps and websites. From Wireframes to MVP to Pixel-Perfect designs. Complex workflows simplified but also beauty of a brand brought out by the simplicity.'
                },
                {
                    number: '03',
                    title: 'Cloud Hosting & DevOps',
                    description: 'We run your application on the Cloud or Local Server depending on your requirements. Scalable, high-performance and cost effective. We support fully automated deployments, local or test environments.'
                }
            ]
        }
    },

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

.bg-image-01 {
    background-image:  linear-gradient(rgba(80, 80, 80, 0.7), rgba(0, 0, 0, .6)), url('../../assets/imgs/home.jpg');
    background-size: cover;
    width: 100%;
    height: 70vh;
    font-family: 'Teko', sans-serif;
}

.bg-image-02 {
    background-image:  linear-gradient(rgba(80, 80, 80, 0.7), rgba(0, 0, 0, .6)), url('../../assets/imgs/code.jpg');
    background-size: cover;
    width: 100%;
    height: 70vh;
    font-family: 'Teko', sans-serif;
}

.bg-image-03 {
    background-image:  linear-gradient(rgba(80, 80, 80, 0.7), rgba(0, 0, 0, .6)), url('../../assets/imgs/docks.jpg');
    background-size: cover;
    width: 100%;
    height: 70vh;
    font-family: 'Teko', sans-serif;
}

.number {
    font-size: 75px;
    line-height: 75px;
    font-weight: 400;
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    opacity: .8;
    margin-bottom: 20px;
}

h5 {
    font-size: 40px;
    margin-bottom: 20px;
    border-color: #ff5252;
}

p {
    font-size: 15px;
    font-family: "Poppins", sans-serif !important;
    color: #fff;
    line-height: 23px;
}

</style>