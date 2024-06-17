<template>
    <div>
        <h1>Mais Avaliados</h1>
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
      import { getMostAiring} from "@/services/HttpService";
      
      export default {
        name: "CardMostAiring",
        data() {
          return {
            animes: [],
          };
        },
        methods: {
          async getInfo() {
            const responses = await getMostAiring();
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
        margin-top: 10px;
        padding: 0;
      }
      .titulo {
        margin: 10px;
        width: 200px;
        height: auto;
        background-color: #0c0c0c;
        display: grid;
        text-align: start;
      
        h5{
          background-color: #0c0c0c;
          font-weight: 400;
        }
        p{
          background-color: #0c0c0c;
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
        width: auto;
        background-color: #0c0c0c;
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
      .card:hover {
      transform: scale(1.1); 
      transition-duration: 0.5s;
      cursor: poj;
}
      h1{
      margin: 30px 0 10px 20px;
      font-weight: 700;
      color: #3D0E5B;
    }
      </style>