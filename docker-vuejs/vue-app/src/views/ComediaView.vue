<template>
    <div class="container">
      <CardComponent :idGenero="4" nomeGenero="Comédia" limite="25"/>
      <CardComponent :idGenero="4" nomeGenero="" limite="25"/>
    </div>
  </template>
  
  <script>
  import CardComponent from '../components/CardComponent.vue';

  export default {
      name: "ComediaView",
      components: {
        CardComponent,
      }
  }
  </script>
  
  <style scoped>
  
  </style>