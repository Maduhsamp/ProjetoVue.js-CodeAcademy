<template>
    <div class="card" v-for="anime in animes" :key="anime.id">
      <h5>{{ anime.nome }}</h5>
      <img v-if="anime.imagem" :src="anime.imagem">
    </div>
</template>
<script>
import { getAnimes } from "@/services/HttpService";

export default {
  name: "ComedyCardComponent",
  data() {
    return {
      animes: [],
    };
  },
  
  methods: {
    async getInfo() {
      const ids = ['16498', '5114', '11757', '32281', '4181', '35247', '9253', '28977', '33486', '30831', 
      '32071', '31043', '15335', '22135', '37510', '31478', '11579', '36901', '20589', '32491'];
      const animePromises = ids.map(id => getAnimes(id));
      const responses = await Promise.all(animePromises);
      this.animes = responses.map(response => ({
        id: response.data.data.mal_id,
        nome: response.data.data.title,
        nomejapones: response.data.data.title_japanese,
        imagem: response.data.data.images.jpg.large_image_url,
      }));
    },
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