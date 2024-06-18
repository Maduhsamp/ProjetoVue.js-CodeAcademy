<template>
<div>
    <h1>{{nomeGenero}}</h1>
    <div class="cards">
        <div class="card" v-for="anime in animes" :key="anime.id" @click="goToDescripton(anime.id)">
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
    page:{
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
        const responses = await getTopFiveGenre(this.page,this.idGenero,this.limite);
        this.animes = responses.data.data.map(response => ({
          id: response.mal_id,
          nome: response.title,
          nomejapones: response.title_japanese,
          imagem: response.images.jpg.large_image_url,
        }));
        console.log(responses);
    },
    goToDescripton(inputId){
          this.$router.push({ name: 'Detalhes', params: {inputId}});
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
      color: #FDFAFF;
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
    margin: 20px 5px;
    width: auto;
    background-color: #2c2c2c;
    color: #FDFAFF;
    text-align: center;
    border-radius: 16px;
    align-items: center;
  
    img{
      margin: 5px 5px;
      width: 210px;
      height: 300px;
      justify-self: end;
      border-radius: 14px;
    }
  }
  .card:hover {
      transform: scale(1.1); 
      transition-duration: 0.5s;
      cursor: pointer;
      box-shadow:rgba(148, 0, 243,0.3) 2.5px 2.5px, rgba(148, 0, 243, 0.2) 5px 5px, rgba(148, 0, 243, 0.1) 10px 10px, rgba(148, 0, 243,0.05) 15px 15px;
  }
  h1{
  margin: 30px 0 15px 20px;
  font-weight: bold;
  color: #FDFAFF;
}
  </style>