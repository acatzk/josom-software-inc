<template>
    <vue-horizontal-list :items="items">
        <template v-slot:default="{ item }">
            <slot :item="item"></slot>
        </template>
    </vue-horizontal-list>
</template>

<script>

export default {

    name: 'horizontal-list',

    props: {
        items: {
            type: Array,
            required: true
        }
    },

    components: {
        VueHorizontalList: () => import('vue-horizontal-list')
    }

}
</script>