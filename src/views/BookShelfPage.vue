<template>
<section class="section">
  <div class="container">
    <h2>Vår bokhylle</h2>
    <p>I bokhyllen finner du bøker fra tidligere måneder. Vi leser en bok i måneden, og bøkene kan diskuteres inne på hver bok sin egen side</p>
  </div>
</section>
  <book-shelf-list/>
</template>

<script>
import BookShelfList from '../components/BookShelfList'
export default {
  setup(){
    return { BookShelfList }
  }
}
</script>