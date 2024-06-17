<template>
  <div class="container">
    <CardComponent :page="1" idGenero="1" nomeGenero="Ação" limite="25"/>
    <CardComponent :page="2" idGenero="1" nomeGenero="" limite="25" />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
    name: "AcaoView",
    components: {
      CardComponent,
    }
}
</script>

<style scoped>

</style>