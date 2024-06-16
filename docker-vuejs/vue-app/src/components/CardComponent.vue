<template>
<div>
    <h1>{{nomeGenero}}</h1>
    <div class="cards">
        <div class="card" v-for="anime in animes" :key="anime.id">
            <img v-if="anime.imagem" :src="anime.imagem">
            <div class="titulo">
                <h5>{{ anime.nome }}</h5>
                <p>{{ anime.nomejapones }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import { getTopFiveGenre} from "@/services/HttpService";
  export default {
    name: "CardComponent",
    data() {
      return {
        animes: [],
      };
    },
    props: {
    idGenero: {
      type: Number,
      required: true
    },
    nomeGenero: {
      type: String,
      required: true
    },
    limite:{
        type: Number,
        required: true
    },
    delay: {
      type: Number,
      required: false,
      default: 0,
    }
    },
    methods: {
      async getInfo() {
        // const ids = ['16498', '30276', '11757', '38000','31964'];
        // const animePromises = ids.map(id =>getTopFiveGenre(1));
        const responses = await getTopFiveGenre(this.idGenero,this.limite);
        this.animes = responses.data.data.map(response => ({
          id: response.mal_id,
          nome: response.title,
          nomejapones: response.title_japanese,
          imagem: response.images.jpg.large_image_url,
        }));
        console.log(responses);
        // console.log(this.nomeGenero);
        // console.log(this.idGenero);
    }
    },
    
    created() {
        setTimeout(this.getInfo,this.delay); 
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
  .cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: auto;
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
  h1{
  margin: 10px 0 10px 60px;
  font-weight: bold;
}
  </style>