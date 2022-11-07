<template>
  
  <!-- <CochesComponent/> -->
  <MenuComponent/>
  <router-view></router-view>
</template>

<script>
//import CochesComponent from './components/CochesComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
export default {
  name: 'App',
  components: {
    MenuComponent
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
