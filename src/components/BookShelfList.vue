<template>
  <section class="section book-shelf-section">
    <div class="container book-shelf-grid">
      <book-shelf-item
        v-for="( book, index ) in books"
        :key="index"
        :title="book.title"
        :year="book.year"
        :author="book.author"
        :image="book.image"
        :path="book.path"
      />
    </div>
  </section>
</template>

<script>
import BookShelfItem from './BookShelfItem'
import booksArray from '../scripts/booksArray'
import { ref } from 'vue'
export default {
  components: { BookShelfItem },
  setup(){
    const books = ref( booksArray )
    
    return { books, BookShelfItem }
  }
}
</script>

<style scoped>
  .book-shelf-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px 20px;
  }

  .book-shelf-section {
    padding-top: 0;
  }
</style>