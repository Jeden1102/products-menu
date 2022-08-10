<template>
  <div id="nav">
    <TheNavigation/>
  </div>
  <router-view/>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue';
export default {
  components : {
    TheNavigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
#app {
  padding:30px 0;
  overflow-x: hidden;
  background-color: white;
}
</style>
