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
        margin: 0;
        padding: 0;
      }
      .titulo {
        margin: 10px;
        width: 200px;
        height: auto;
        background-color: #2A232F;
        display: grid;
        text-align: start;
      
        h5{
          background-color: #2A232F;
          font-weight: 400;
        }
        p{
          background-color: #2A232F;
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
        background-color: #2A232F;
        color: white;
        text-align: center;
        border-radius: 16px;
        align-items: center;
        
        img{
          width: 221px;
          height: 300px;
          justify-self: end;
          border-radius: 14px;
        }
      }
      .card:hover {
      transform: scale(1.1); /* Aumenta o tamanho do card em 10% */
      transition-duration: 0.5s;
      box-shadow:rgba(148, 0, 243,0.3) 2.5px 2.5px, rgba(148, 0, 243, 0.2) 5px 5px, rgba(148, 0, 243, 0.1) 10px 10px, rgba(148, 0, 243,0.05) 15px 15px;
}
      h1{
        margin: 30px 0 15px 20px;
      font-weight: 700;
      color: #FDFAFF;
    }
      </style>