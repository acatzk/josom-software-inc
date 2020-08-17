<template>
  <v-footer
    padless
    :dark="mode ? false : true"
  >
    <v-card
      class="flex"
      flat
      style="background: transparent;"
    >
      <v-card-text class="py-2 text-center">
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          class="mx-4"
          dark
          icon
          :href="link.link"
          target="_blank"
        >
          <v-icon 
            size="24px" 
            color="grey" 
            :data-icon="link.icon === 'cib-stackoverflow' ? 'cib-stackoverflow' : undefined"
            :class="link.icon === 'cib-stackoverflow' ? 'iconify' : undefined"
          >{{ link.icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    links: [
      {
        icon: 'mdi-facebook',
        link: 'https://facebook.com'
      },
      {
        icon: 'mdi-twitter',
        link: 'https://twitter.com'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://linkedin.com'
      },
      {
        icon: 'mdi-instagram',
        link: 'https://instagram.com'
      },
      {
        icon: 'mdi-github',
        link: 'https://github.com'
      },
      {
        icon: 'cib-stackoverflow',
        link: 'https://stackoverflow.com'
      }
    ],
  }),
  computed: {
    ...mapState(['mode'])
  }
}
</script>