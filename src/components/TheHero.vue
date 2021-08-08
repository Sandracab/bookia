<template>
  <section id="hero-bg" class="section">
      <div class="container hero-content">
        <h2>
          Disse bøkene vil du ikke klare å legge fra deg
        </h2>
        <hero-image-list/>
        <div class="hero-controller">
          <img v-if="counter < 9" id="hero-controller-left" v-on:click="incrementCounter" src="../assets/ArrowLeft.png" alt="Arrow pointing left">
          <img v-else id="hero-controller-left" src="../assets/ArrowDisabledLeft.png" alt="Arrow pointing left">
          <img v-if="counter > 0" id="hero-controller-right" v-on:click="decrementCounter" src="../assets/ArrowRight.png" alt="Arrow pointing right">
          <img v-else id="hero-controller-left" src="../assets/ArrowDisabledRight.png" alt="Arrow pointing right">
        </div>
      </div>
  </section> 
</template>

<script>
import booksArray from '../scripts/booksArray'
import HeroImageList from './HeroImageList.vue'
import { ref } from 'vue'
import { reactive } from 'vue'
export default {
  components: { HeroImageList },
  setup(){
    const books = reactive ( booksArray )
    let counter = ref( ( books.length - 1) );

    const incrementCounter = () => {
      counter.value++;
      changeBackgroundColor(counter.value);
      removeClass();
    }

    const decrementCounter = () => {
      addClass();
      if( counter.value > 0 ) counter.value--;
      changeBackgroundColor(counter.value);
    }

    const changeBackgroundColor = ( counterNumber ) => {
      let heroBg = document.getElementById("hero-bg");
      heroBg.style.backgroundColor = books[counterNumber].bgColor;
    }

    const addClass = ( ) => {
      let currentHeroImage = "hero-image-" + counter.value;
      document.getElementById(currentHeroImage).removeAttribute("style");
      document.getElementById(currentHeroImage).classList.add("moved-left");
    }

    const removeClass = ( ) => {
      let currentHeroImage = "hero-image-" + counter.value;
      document.getElementById(currentHeroImage).classList.remove("moved-left");
      document.getElementById(currentHeroImage).setAttribute("style", "transform: translate(" + counter.value * (-10) + "px, " + counter.value * (10) + "px)");
    }

    return { books, counter, incrementCounter, decrementCounter }
  }
}
</script>

<style scooped>

  #hero-bg {
    background-color: #F9C74F;
    transition: 1s ease-out;
    padding: 75px 0 60px;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }

  .hero-content h2 {
    max-width: 600px;
    padding: 0 1em;
    font-size: 40px;
  }

  .hero-images.moved-left {
    transform: translate(1500px, 0);
  }

  .hero-controller {
    text-align: center;
    margin-top: 40px;
    grid-column: span 2;
  }

  .hero-controller img {
    padding: 15px 34px;
    border-radius: 50px;
    margin: 0 15px;
    cursor: pointer;
  }

  #hero-controller-left:hover, #hero-controller-right:hover  {
    background-color: #17131315;
  }
</style>