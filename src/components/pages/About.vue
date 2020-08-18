<template>
    <v-card
        class="mx-auto"
        flat
        id="about"
        :dark="mode ? false : true"
    >
        <v-container>
            <v-card-text class="font-weight-normal text-uppercase subtitle">
                <span>ABOUT US</span>
            </v-card-text>
            <v-card-text class="font-weight-bold text-uppercase title">
                <h2>ABOUT JOSOM SOFTWARE</h2>
            </v-card-text>
            <v-card-text class="about-text" :style="mode ? 'font-weight: normal;' : ''">
                Josom Sotware Incorporation is an IT solutions company in the Philippines that focus on catering very quality website / web application software and feels the UX as its finest. Goes way back 2019 - A young & aspiring IT graduated, dream to become software developer in the near future. But things are not just easy, he applied more than 20 job applications as a software developer and sooner he was hired. While he was working, his passion and eagerness to learn anything under any circumstances push him to surpass his limit on doing what he love most. He tried to get a sideline project while he was working to gain more experience. He was thinking that if he do a sideline projects while working, will makes his self development even more faster ( money was just a bonus for him ) .
                <br />
                <br />
                As time goes by, Several clients trust him because of his credibility and dedication on his work. He always finished the project ahead of time. He never fail his clients. In year 2020 and also being a fullstack developer. He wants to make a change. He started to make a start up firm for business IT solutions not for the money but for his passion. He name the company " JOSOM " meaning Joshua with collaboration of Jerome in Short Josom Software, Inc.
            </v-card-text>
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
.v-card {
    border-radius: 0 !important;
    -moz-webkit-border-radius: 0;
    min-height: 100vh;
    padding-top: 50px;
}
.about-text {
    text-align: justify;
    text-justify: inter-word;
    line-height: 2rem;
    font-weight: lighter;
    font-size: 16px;
}

h2 {
    font-size: 2.2rem;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    margin: 0;
}
</style>