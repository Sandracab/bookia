<template>
  <img class="hero-images" 
    :src="require(`@/assets/books/${ image }`)"
  >
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "placeholder.jpg"
    }
  }
}
</script>

<style>
  .hero-images {
    width: 300px;
    height: auto;
    position: absolute;
    transform: translate(0 ,0);
    transition: 2s ease-in-out;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1);
    border-radius: 1px;
  }
</style>