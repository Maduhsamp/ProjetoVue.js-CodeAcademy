<template>
  <div class="container">
      <CardMostPopular/>
      <CardMostAiring/>
      <CardUpcoming/>
  </div>
</template>

<script>
import CardMostAiring from '@/components/CardMostAiring.vue';
import CardComponent from '../components/CardComponent.vue';
import CardMostPopular from "../components/CardMostPopular.vue";
import CardUpcoming from "../components/CardUpcoming.vue"

export default {
    name: "InicioView",
    components: {
      CardComponent,
      CardMostPopular,
      CardMostAiring,
      CardUpcoming
    }
}
</script>

<style scoped>

</style>