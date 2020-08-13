<template>
    <v-card-actions class="d-flex justify-space-around">
        <v-tooltip top color="#4267B2">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    :color="mode ? '#4267B2' : ''"
                    v-on="on"
                    v-bind="attrs"
                    :href="item.fbLink"
                    target="_blank"
                    v-show="item.fbLink"
                    rounded
                >
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
            </template>
            <span>
                <v-icon left color="white">mdi-facebook</v-icon> Facebook
            </span>
        </v-tooltip>
        <v-tooltip top color="#1DA1F2">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    icon
                    rounded
                    :color="mode ? '#1DA1F2' : ''"
                    :href="item.twitterLink"
                    v-on="on"
                    v-bind="attrs"
                    v-show="item.twitterLink"
                    target="_blank"
                >
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
            </template>
            <span>
                <v-icon left color="white">mdi-twitter</v-icon> Twitter
            </span>
        </v-tooltip>
        <v-tooltip top color="#333">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    :href="item.githubLink"
                    icon
                    :color="mode ? '#333' : ''"
                    v-on="on"
                    v-bind="attrs"
                    target="_blank"
                    v-show="item.githubLink"
                    rounded
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
            </template>
            <span>
                <v-icon left color="white">mdi-github</v-icon> Github
            </span>
        </v-tooltip>
    </v-card-actions>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'social-media-links',

    props: ['item'],

    computed: {
        ...mapState(['mode'])
    }

}
</script>