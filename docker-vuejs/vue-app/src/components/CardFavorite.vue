<template>
    <div>
            <div class="card" @click="goToDescripton(anime.id)">
                <img v-if="anime.imagem" :src="anime.imagem">
                <div class="titulo">
                    <h5>{{ anime.nome }}</h5>
                    <p>{{ anime.nomejapones }}</p>
                </div>
            </div>
    </div>
</template>
    
    <script>
      import { getTopFiveGenre} from "@/services/HttpService";
      export default {
        name: "CardFavorite",
        data() {
          return {
            animes: [],
          };
        },
        props: {
            anime:{
                type: Object,
                required: true
            }
        },
        methods: {
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
        }
        p{
          background-color: #2A232F;
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
        background-color: #2A232F;
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