<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'
import AboutUs from './components/AboutUs.vue'
import Aromas from './components/Aromas.vue'
import Materials from './components/Materials.vue'
import FinishedProduct from './components/FinishedProduct.vue'
import Constructor from './components/Constructor.vue'

</script>

<template class="app">
  <header>
    <Header/>
    <Gallery/>
    <AboutUs/>
    <Aromas/>
    <Materials/>
    <!-- <FinishedProduct/> -->
    <Constructor/>
  </header>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <h1>It is my text</h1>
    </div>
  </header> -->

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>




</style>
