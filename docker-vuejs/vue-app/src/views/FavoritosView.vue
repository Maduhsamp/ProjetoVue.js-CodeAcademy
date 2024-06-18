<template>
    <div class="container">
      <h1>Meus Favoritos</h1>
      <div class="cards">
        <CardFavorite v-for="favorite in getFavorites" :key="favorite.id" :anime="favorite" />
      </div>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex';
import CardFavorite from '../components/CardFavorite.vue';

export default {
  name: "FavoritesView",
  components: {
    CardFavorite
  },
  computed: {
    ...mapGetters(['getFavorites'])
  }
};
</script>

<style scoped>
.cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: auto;
      margin: 0 10px;
}
h1{
      margin: 30px 0 15px 130px;
      font-weight: 700;
      color: #FDFAFF;
}
</style>
