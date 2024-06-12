<template>
    <div class="container">
        <div class="card">
           <img v-if="imagem" :src="imagem">
           <div class="info">
               <h1 >{{nome}}</h1>
               <h3>{{ nomejapones }}</h3>
               <p>{{ano}}</p>
               <p>{{ sinopse }}</p>
               <div class="genero">
                   <p><strong>Gênero:</strong></p>
                   <p v-for="genero in generos">{{ genero.name }}</p>
               </div>
           </div>
       </div>
   </div> 
   </template>
   
   <script>
   export default {
       name:"CardDetalhes",
   
       data(){
           return{
               nome: '',
               nomejapones:'',
               ano:'',
               imagem: '',
               sinopse: '',
               generos: '',
           }
       },
   
   created(){
       this.axios.get('https://api.jikan.moe/v4/anime/52588/full')
       .then((response)=>{
           console.log(response);
           this.nome =response.data.data.title;
           this.nomejapones=response.data.data.title_japanese;
           this.ano =response.data.data.year;
           this.imagem =response.data.data.images.jpg.large_image_url
           this.sinopse =response.data.data.synopsis;
           this.generos =response.data.data.genres;
       })
   }
   }
   </script>
   
   <style>
   
   .container{
       display: flex;
       font-family: poppins;
   }
   
   .card{
       margin: 50px;
       background-color: #3D0E5B;
       border: solid 1px gray;
       border-radius: 24px;
       width: 100%;
       color: white;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
   } 
   .info{
       display: flex;
       flex-direction: column;
       align-items: start;
       text-align: left;
   }
   .genero{
       display:flex;
       margin: 20px 0;
   }
   img{
       width: 350px;
       height: 500px;
       margin: 40px;
       border-radius:24px;
   }
   h1{
       margin: 30px 0px 10px 0;
   }
   p{
       margin: 10px 30px 0 0;
   }
   </style>