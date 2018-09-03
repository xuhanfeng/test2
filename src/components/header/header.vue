<template>
  <div class="hello">
      <h1>音乐app</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: '',
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
  height: 3rem;
  background:#ccc;
  line-height:3rem;
  text-align:center;
  font-size:1.2rem;
}
</style>
