<template>
  <the-hero/>
  <call-to-action/>
</template>

<script>
import TheHero from '../components/TheHero'
import CallToAction from '../components/CallToAction'
export default {
  setup() {

    return { TheHero, CallToAction }
  }
}
</script>