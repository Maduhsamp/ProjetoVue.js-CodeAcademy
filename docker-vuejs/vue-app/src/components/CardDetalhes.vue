<template>
    <div class="container">
        <div class="card">
            <img v-if="imagem" :src="imagem">
            <div class="info">
                <h1 >{{nome}}</h1>
                <h3>{{ nomejapones }}</h3>
                <p>Ano de lançamento: {{ano}}</p>
                <div class="sinopse">
                    <h3>Synopsis</h3>
                    <p>{{ sinopse }}</p>
                </div>
                <div class="genero">
                    <p><strong>Gênero:</strong></p>
                    <p v-for="genero in generos">{{ genero.name }}</p>
                    <input v-model="inputId" @:keydown.enter="getInfo()" placeholder="id"> 
                </div>
            </div>
        </div>
    </div> 
    </template>
    
    <script>
    import {getInfoAnime} from '@/services/HttpService';
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
                inputId: '',
            }
        },
        methods:{
            async getInfo(){
                console.log(this.inputId);
                const response = await getInfoAnime(this.inputId)
                this.nome =response.data.data.title;
                this.nomejapones=response.data.data.title_japanese;
                this.ano =response.data.data.year;
                this.imagem =response.data.data.images.jpg.large_image_url
                this.sinopse =response.data.data.synopsis;
                this.generos =response.data.data.genres;
            }
        },
    }
    </script>
    
    <style lang="scss">
    
    .container{
        display: flex;
        font-family: poppins;
    }
    
    .card{
        margin: 50px;
        background-color: #3D0E5B;
        border-radius: 24px;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: row;
    } 
    .info{
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: left;

        h1{
            margin-left: 30px;
        }
        h3{
            margin-left:30px;
        }
        p{
            margin-left:30px;
        }
    }
    .sinopse{
        background: #2c2c2c;
        border-radius: 16px;
        padding: 30px;  
        margin-right: 40px;
        box-shadow: 10px 10px 20px rgb(0, 0, 0);
        
        h3{
            margin: 0 0 10px;
        }
        p{
            margin:0
        }
    }

    .genero{
        display:flex;
        margin: 30px 0;
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
    </style>