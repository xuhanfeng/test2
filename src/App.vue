<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'App',
  component:{
    header
  }
}
</script>

<style>
#app {
 
}
</style>
