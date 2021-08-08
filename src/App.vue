<template>
  <the-header/>
  <router-view>
  </router-view>
  <the-footer/>
</template>

<script> 
import TheHeader from '../src/components/TheHeader'
import TheFooter from '../src/components/TheFooter'
export default {
  setup(){

    return { TheHeader, TheFooter }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font: 15px Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #171313;
}

.container {
  max-width: 1090px;
  padding: 0 30px;
  margin: 0 auto;
}

.section {
  padding: 60px 0;
}

h1, h2, h3 {
  font-family: 'DM serif Display', serif;
  letter-spacing: 1px;
}

h2 {
  font-size: 2.122rem;
  padding-bottom: 0.25em;
}

p {
  max-width: 750px;
}

</style>
