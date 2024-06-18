<template>
    <div>
        <h1>Meus Favoritos</h1>
        <CardComponent v-for="favorite in getFavorites" :key="favorite.id" :anime="favorite" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardComponent from '../components/CardComponent.vue'

export default {
    name: "FavoritesView",
    components: {
        CardComponent
    },
    computed: {
        ...mapGetters(['getFavorites'])
    }
}

</script>

<style scoped>
h1{
      margin: 30px 0 15px 20px;
      font-weight: 700;
      color: #FDFAFF;
}
</style>
