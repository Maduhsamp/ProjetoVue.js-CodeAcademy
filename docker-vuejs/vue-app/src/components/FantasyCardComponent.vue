<template>
    <div class="card" v-for="anime in animes" :key="anime.id">
      <h5>{{ anime.nome }}</h5>
      <img v-if="anime.imagem" :src="anime.imagem">
    </div>
</template>
<script>
import { getAnimes } from "@/services/HttpService";

export default {
  name: "FantasyCardComponent",
  data() {
    return {
      animes: [],
    };
  },
  
  methods: {
    async getInfo() {
      const ids = ['1', '5', '6', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', 
      '27', '28', '29', '30', '31'];
      const animePromises = ids.map(id => getAnimes(id));
      const responses = await Promise.all(animePromises);
      this.animes = responses.map(response => ({
        id: response.data.data.mal_id,
        nome: response.data.data.title,
        nomejapones: response.data.data.title_japanese,
        imagem: response.data.data.images.jpg.large_image_url,
      }));
    }
  },
  created() {
    this.getInfo();
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.card {
  flex-basis: calc(20% - 20px);
  margin: 10px; 
  width: 70px;
  padding: 10px;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
  border-radius: 16px;
  align-items: center;
  h5{
    margin-bottom: 10px;
  }
  img{
    align-items: end;
  }
}

.card img {
  max-width: 70%;
  border-radius: 5px;
}
</style>