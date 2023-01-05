<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');
body {
  font-family: 'Lato', sans-serif;
}

#app {
    font-family: 'Lato', sans-serif;
}

p {
  font-family: 'Open Sans', sans-serif;
}
</style>
