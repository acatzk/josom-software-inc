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

            <v-flex>
                <div class="d-flex justify-center">
                    <v-icon>mdi-home-outline</v-icon>: Baybay, Leyte
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
                    :disabled="loading" 
                    data-aos="fade-up"
                >
                    <v-row class="mx-12">
                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="name"
                                label="Name"
                                required
                                filled
                                :rules="[required('Name')]"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                filled
                                required
                                :rules="[required('Email'), emailRules('Email')]"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="phone"
                                label="Phone"
                                required
                                filled
                                :rules="[required('Phone')]"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                             <v-textarea
                                filled
                                label="Message"
                                v-model="message"
                                :rules="[required('Message')]"
                            ></v-textarea>
                        </v-col>

                        <v-col cols="12" class="text-center">
                            <v-btn
                                depressed
                                rounded
                                large
                                text
                                class="mr-1"
                                @click="$refs.form.reset()"
                                color="grey"
                            >
                                Cancel <v-icon right>mdi-reload</v-icon>
                            </v-btn>
                            <v-btn
                                color="success"
                                depressed
                                rounded
                                large
                                @click="onSendMessage"
                                :loading="loading"
                            >
                                SEND <v-icon right>mdi-send</v-icon>
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

    import { toastAlertStatus, required, emailRules } from '@/utils'

    import gql from 'graphql-tag'

    export default {
        name: 'recommendations',

        data () {
            return {
                name: '',
                email: '',
                phone: '',
                message: '',
                valid: true,
                lazy: false,
                loading: false,
                required(propertyType) { 
                    return required(propertyType)
                },
                emailRules(propertyType) {
                    return emailRules(propertyType)
                }
            }
        },

        computed: {
            ...mapState(['mode'])
        },

        methods: {
            onSendMessage () {
                if (this.$refs.form.validate()) {
                    this.loading = true

                    const {
                        name,
                        email,
                        phone,
                        message
                    } = this.$data

                    this
                    .$apollo
                    .mutate({
                        mutation: gql`
                            mutation messageEmail($email: String!, $message: String!, $name: String!, $phone: String) {
                                insert_email_employer(objects: [{email: $email, message: $message, name: $name, phone: $phone}]) {
                                returning {
                                        id
                                    }
                                }
                            }  
                        `,
                        variables: {
                            name,
                            email,
                            phone,
                            message
                        }
                    })
                    .then(() => {
                        this.loading = false
                        toastAlertStatus('success', 'Email Successfully Sent')
                        this.$refs.form.reset()
                    })
                    .catch(error => {
                        this.loading = false
                        toastAlertStatus('error', error)
                    })

                }
            }
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
h2 {
    font-size: 2.2rem;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
</style>