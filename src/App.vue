<template>
  <div id="app">
    <h1 class="text-center">Solazu test</h1>
    <h2 class="text-center">Nguyen Minh Duc</h2>
    <p class="text-center">Phone: 0385355306, Email: <a href="mailto:duc91bk@gmail.com">duc91bk@gmail.com</a></p>
    <parent class="mb-4" :titleParent="'Parent 1'" :idParent="'parent-1'" />
    <parent :titleParent="'Parent 2'" :idParent="'parent-2'" />
  </div>
</template>

<script>
import parent from './components/parent.vue'

export default {
  name: 'App',
  components: {
    parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
