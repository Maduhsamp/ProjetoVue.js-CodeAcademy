<template>
  <img :src="anime.data.images.jpg.large_image_url" />
  <!-- <button @click="addFavoriteAction(character)">Adicionar Favorito</button> -->
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: "CardComponent",
  props: {
    anime: {
      type: Object,
      required: true,
    },
  },
  // methods: {
  //   ...mapActions(['addFavoriteAction'])
  // }
};
</script>

<style>
  /* button {
    width: 100px;
    height: 50px;
  } */
</style>
