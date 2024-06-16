<template>
  <div class="card" v-for="anime in animes" :key="anime.id">
    <img v-if="anime.imagem" :src="anime.imagem">
    <div class="titulo">
      <h5>{{ anime.nome }}</h5>
      <p>{{ anime.nomejapones }}</p>
    </div>
  </div>
</template>
<script>
import { getAnimes,getTopFiveGenre} from "@/services/HttpService";

export default {
  name: "ActionCardComponent",
  data() {
    return {
      animes: [],
    };
  },
  
  methods: {
    async getInfo() {
      // const ids = ['16498', '30276', '11757', '38000','31964'];
      // const animePromises = ids.map(id =>getTopFiveGenre(1));
      const responses = await getTopFiveGenre(1);
      this.animes = responses.data.data.map(response => ({
        id: response.mal_id,
        nome: response.title,
        nomejapones: response.title_japanese,
        imagem: response.images.jpg.large_image_url,
      }));
      console.log(responses);
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
.titulo {
  margin: 10px;
  width: 200px;
  height: auto;
  background-color: #2c2c2c;
  display: grid;
  text-align: start;

  h5{
    background-color: #2c2c2c;
  }
  p{
    background-color: #2c2c2c;
    color: white;
    font-size: 15px;
  }
}
.card {
  margin: 5px;
  width: auto;
  background-color: #2c2c2c;
  color: white;
  text-align: center;
  border-radius: 16px;
  align-items: center;
  box-shadow: rgb(39, 40, 40) 15px 15px 20px -10px;

  img{
    margin: 5px 5px;
    width: 210px;
    height: 300px;
    justify-self: end;
    border-radius: 14px;
  }
}
</style>