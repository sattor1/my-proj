<template>
  <div id="app">
    <router-view />
    <Main />
  </div>
</template>

<script>
import Main from './main/indexMain.vue'

export default {
  name: 'App',

  components: {
    Main
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  max-width: 1198px;
  margin: 0 auto;
}
</style>
