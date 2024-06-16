<template>
  <div class="container">
      <CardComponent :idGenero="1" nomeGenero="AÇÃO" limite="5"/>
      <CardComponent :idGenero="2" nomeGenero="AVENTURA" limite="5"/>
      <CardComponent :idGenero="4" nomeGenero="COMEDIA" limite="5"/>
      <CardComponent :idGenero="10" nomeGenero="FANTASIA" limite="5" delay="2000"/>
      <CardComponent :idGenero="22" nomeGenero="ROMANCE" limite="5" delay="3000"/>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
   name: "InicioView",
   components: {
    CardComponent
   }
}
</script>

<style scoped>

</style>