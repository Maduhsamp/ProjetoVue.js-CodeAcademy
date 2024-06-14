<template>
    <div class="card" v-for="anime in animes" :key="anime.id">
      <h5>{{ anime.nome }}</h5>
      <img v-if="anime.imagem" :src="anime.imagem">
    </div>
</template>
<script>
import { getAnimes } from "@/services/HttpService";

export default {
  name: "FicctionCardComponent",
  data() {
    return {
      animes: [],
    };
  },
  
  methods: {
    async getInfo() {
      const ids =  ['9253', '9969', '39326', '41328', '5114', '22319', '2904', '121', '19815', '1818', '1686', 
      '33', '11559', '371', '578', '189', '37', '15167', '19', '6746'];
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