<template>
  <section id="book-stack-container">
    <hero-image-item
      v-for="( book, index ) in books" 
      :key="index"
      :id=" 'hero-image-'+ index"
      :src="require(`@/assets/books/${ book.image }`)"
      :style="'transform: translate(' + index * (-10) + 'px, ' + index * (10) + 'px)'"
    />
  </section>
</template>
<script>
import booksArray from '../scripts/booksArray'
import { ref } from 'vue'
import HeroImageItem from './HeroImageItem.vue'
export default {
  components: { HeroImageItem },
  setup(){
    const books = ref( booksArray )
    
    return { books, HeroImageItem }
  }
}
</script>

<style>
  #book-stack-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;    
  height: 550px;
}
</style>