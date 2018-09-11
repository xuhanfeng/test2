<template>
  <div class="hello">
      <h1>音乐app</h1>
      <ul>
        <router-link tag="li" to="/tab/recommon">推荐</router-link>
        <router-link tag="li" to="/tab/singer">歌手</router-link>
        <router-link tag="li" to="/tab/sing">排行</router-link>
        <router-link tag="li" to="/tab/search">搜索</router-link>
      </ul>
       <router-view/>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/mixin.scss';
.hello{
  width:100%;
  line-height:3rem;
  text-align:center;
  font-size:1.2rem;
  h1{
     height: 3rem;
    background:#ccc;
  }
}
ul{
  display:-webkit-box;
  li{
    -webkit-box-flex: 1;
  }
}
</style>
