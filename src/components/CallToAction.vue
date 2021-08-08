<template>
    <section class="section">
    <div class="container cta">
      <img src="../assets/SitReadingDoodle.png" alt="">
      <h2>Din digitale bokklubb</h2>
      <p>Bli medlem i Bookia og få tilsendt månedens bok i posten, les spennende bøker som gir deg kultur, kunnskap og underholdning, og diskuter dem med andre Bookia-medlemmer.</p>
      <input type="button" value="Bli medlem i Bookia" v-on:click="makeTrue()">
      <div v-bind:class="isClicked ? 'display-welcome':'display-none'">
        <h3>Takk for at du vil bli med oss å lese</h3>
        <p>Du vil få din første bok i posten om et par dager, det er bare å glede seg!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){

    let isClicked = ref( false );
    

    const makeTrue = () => {
      isClicked.value = true;
      let button = document.querySelector("input");
      button.style.display = "none";
    }

    return { makeTrue, isClicked }
  }
}
</script>

<style scoped>
  .cta {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  h2 {
    align-self: flex-end;
  }

  img {
    grid-row: span 4;
    width: 100%;
    height: auto;
  }

  input {
    background-color: #fff;
    color: #171313;
    border: #171313 2px solid;
    align-self: flex-start;
    justify-self: right;
    font-size: 1rem;
    font-weight: 600;
    height: 48px;
    padding: 0 20px;
    border-radius: 50px;
    margin-right: 2.5em;
    margin-top: 1em;
    transition: 0.3s;
  }

  input:hover {
    background-color: #171313;
    color: #fff;
    border: #171313 2px solid;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  .display-welcome {
    display: block;
    background-color: #6AB47C;
    padding: 1em 2em;
    border-radius: 2px;
  }

  .display-none {
    display: none;
  }

</style>