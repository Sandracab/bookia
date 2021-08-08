<template>
  <article class="book-shelf-item">
    <img :src="require(`@/assets/books/${ image }`)">
    <h3>{{ title }}</h3>
    <p class="tags">{{ year }}</p>
    <p class="tags">{{ author }}</p>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
    author: String,
    image: {
      type: String,
      default: "placeholder.jpg"
    },
    path: String
  }
}
</script>

<style scoped>
.book-shelf-item {
  padding: 2em 1em;
  display: flex;
  height: 100%;
  flex-direction: column;
  border: solid 1px #cecece;
  align-items: flex-start;
}

.book-shelf-item img{
   width: 100%;
   height: 450px;
 }

 .book-shelf-item h3{
   padding: 0.75em 0.5em 0.2em;
 }

 .tags {
   border: solid 2px #eee;
   color: #3c3c3c;
   padding: 0.2em 0.5em;
   border-radius: 50px;
   margin: 2px 5px;
   font-weight: 500;
 }
</style>