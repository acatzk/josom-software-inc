<template>
    <div id="indicator"></div>
</template>

<script>
export default {
    name: 'indicator',

    mounted () {
        var vm = this
        window.addEventListener('scroll', function(e) {
            var scrollPos = window.scrollY
            var winHeight = window.innerHeight
            var docHeight = document.documentElement.scrollHeight // instead document.body.clientHeight
            var perc = 100 * scrollPos / (docHeight - winHeight)
            vm.$el.style.width = perc + '%'
        })
    }

}
</script>

<style scoped>
#indicator{
  position: fixed;
  top:0;
  left:0;
  height: 4px;
  z-index: 999;
  background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
</style>
