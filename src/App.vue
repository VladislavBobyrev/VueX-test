<template>
  <the-header/>
  <main class="container">
    <router-view/>  
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import CardsPage from '@/views/CardsPage.vue'
  export default{
    components: {
      TheHeader,
      CardsPage
    }
  }
</script>

<style >

#app, body, html{
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.container{
  width: 100%;
    height: calc(100% - 76px);
  overflow: scroll;
}
</style>
