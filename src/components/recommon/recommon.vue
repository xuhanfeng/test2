<template>
  <div class="recommon">
     <div class="list">
        <div v-if="recommends.length" class="slider-wrapper">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImg" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
     </div>
  </div>
</template>

<script>
// import Loading from 'base/loading/loading'
// import Scroll from 'base/scroll/scroll'
 import Slider from '../../base/slider/slider'
export default {
  name: 'recommon',
   components: {
      Slider,
      // Scroll,
      // Loading
    },
  data () {
    return {
        recommends:[
           {linkUrl:'123123132132',picUrl:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/335516.jpg'},
           {linkUrl:'123123132132',picUrl:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/338070.jpg'},
           {linkUrl:'123123132132',picUrl:'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/338407.jpg'}
        ]
    }
  },
  methods:{
    loadImg(){}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/mixin.scss';
.recommon{
 
}
.slider-wrapper{
    padding: 0 pxToRem(30);
    .needsclick{
      width: pxToRem(690);
      border-radius: pxToRem(20);
      height: pxToRem(300);
    }
} 

</style>
