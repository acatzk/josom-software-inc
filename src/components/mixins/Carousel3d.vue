<template>
    <div id="carousel">
        <carousel-3d :autoplay="true" :autoplay-timeout="2400">
            <div v-for="item in items" :key="item.id">
                <slide :index="item.id">
                    <img :src="item.imageUrl"/>
                </slide>
            </div>
        </carousel-3d>
    </div>
</template>

<script>


import { Carousel3d, Slide } from 'vue-carousel-3d'

import recommendations from '@/static/recommendations'

export default {

    name: 'CarouselOverflow',

    data() {
        return {
            items: []
        }
    },

    components: {
        Carousel3d,
        Slide
    },

    created () {
        let recommendData = recommendations.recommendations
        return this.items.push(...recommendData)
    }

}
</script>

<style scoped>
.carousel-3d-slide {
    height: auto !important;
    background-color: rgba(0, 0, 0, 0.25) !important;
}
</style>