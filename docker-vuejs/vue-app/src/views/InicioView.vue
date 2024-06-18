<template>
  <div class="container">
      <CardMostPopular/>
      <CardMostAiring/>
      <CardUpcoming/>
  </div>
</template>

<script>
import CardMostPopular from "../components/CardMostPopular.vue";
import CardMostAiring from '@/components/CardMostAiring.vue';
import CardUpcoming from "../components/CardUpcoming.vue"

export default {
    name: "InicioView",
    components: {
      CardMostPopular,
      CardMostAiring,
      CardUpcoming
    }
}
</script>

<style scoped>

</style>