<template>
    <v-card id="contact" :dark="mode ? false : true">

        <v-container>
             <v-flex class="text-center heading">
                <div class="font-weight-normal text-uppercase subtitle">
                    LET'S WORK TOGETHER
                </div>
                <v-card-text class="font-weight-bold text-uppercase title">
                    <h2>CONTACT US</h2>
                </v-card-text>
            </v-flex>

            <v-flex class="text-center">
                <div class="d-flex justify-center">
                    <v-icon>mdi-home-outline</v-icon>: #Baybay, Leyte
                </div>
                <div class="d-flex justify-center">
                    <v-icon>mdi-cellphone-iphone</v-icon>: +63 9657268947 / +63 9753286466
                </div>
                <dir class="d-flex justify-center">
                    <v-icon>mdi-email-outline</v-icon>: josomsoftware@gmail.com
                </dir>
            </v-flex>

            <v-flex class="text-center">
                <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
                >
                    <v-row class="mx-6">
                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="name"
                                label="Name"
                                required
                                filled
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                filled
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="phone"
                                label="Phone"
                                required
                                filled
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                             <v-textarea
                                filled
                                label="Message"
                                v-model="message"
                            ></v-textarea>
                        </v-col>

                        <v-col cols="12" class="text-center">
                            <v-btn
                                color="success"
                                depressed
                                rounded
                                large
                            >
                                SEND MESSAGES <v-icon right>mdi-send</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-form>
            </v-flex>

        </v-container>

    </v-card>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'recommendations',

    data () {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            valid: true,
            lazy: false
        }
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
    padding-top: 50px;
}
h2 {
    font-size: 2.2rem;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
</style>