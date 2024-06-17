<template>
  <div class="container">
    <CardComponent :idGenero="1" nomeGenero="Ação" limite="25"/>
    <CardComponent :idGenero="1" nomeGenero="" limite="25"/>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
  name: "AcaoView",
  components: {
    CardComponent,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 25, 
    };
  },
};
</script>

<style scoped>

</style>