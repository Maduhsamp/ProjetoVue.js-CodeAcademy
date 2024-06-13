<template>
    <div>
    <Header/>
        <div class="cards" v-for="(anime, index) in animes" v-bind:key="index">
           <CardComponent :anime="anime" />
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import CardComponent from '../components/CardComponent.vue';
import { getAnimes } from '@/services/HttpService';

export default {
   name: "InicioView",
   data() {
    return {
        animes: ['Anime 1', 'Anime 2', 'Anime 3']
    }
   },

   components: {
    Header,
    CardComponent
   },

   methods: {
    async getAnimes() {
        const response = await getAnimes()
        console.log(response);

        this.animes = response.data.results;
    },

  },
  computed: {
    animes() {
        return this.animes.slice(0,3);
    }
  },
    created() {
        this.getAnimes();
    }
}
</script>

<style>

   * {
      margin: 0;
      padding: 0;  
   }

  .cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: auto;
  }
</style>