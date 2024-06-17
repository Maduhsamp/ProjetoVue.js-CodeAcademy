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
                    <h5>Gênero:</h5>
                    <p class="tags" v-for="genero in generos">{{ genero.name }}</p>
                    </div>
            </div>
        </div>
    </div> 
    </template>
    
    <script>
    import {getInfoAnime} from '@/services/HttpService';
    export default {
        name:"CardDetalhes",
        props:{
            id:{

            }
        },
        data(){
            return{
                nome: '',
                nomejapones:'',
                ano:'',
                imagem: '',
                sinopse: '',
                generos: '',
                inputId: this.id,
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
        created(){
            this.getInfo();
        }
    }
    </script>
    
    <style lang="scss" scoped>
    
    .container{
        display: flex;
        font-family: poppins;
    }
    
    .card{
        margin: 50px;
        background-color: rgb(61, 14, 91);
        border-radius: 24px;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: row;
        box-shadow: rgb(39, 40, 40) 15px 15px 20px -10px;
    } 
    .info{
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: left;
        background-color: #3d0e5bb3;
        border-radius: 24px;
        h1{
            margin-left: 30px;
            background-color: #3d0e5bb3;
        }
        h3{
            margin-left:30px;
            background-color: #3d0e5bb3;
        }
        p{
            margin-left:30px;
            background-color: #3d0e5bb3;
        }
    }
    .sinopse{
        background: #0c0c0c;
        border-radius: 16px;
        padding: 30px;  
        margin-right: 40px;
        box-shadow: rgb(39, 40, 40) 15px 15px 20px -10px;
        
        h3{
            margin: 0 0 10px;
            background: #0c0c0c;
        }
        p{
            margin:0;
            background:#0c0c0c;
        }
    }

    .genero{
        display:flex;
        margin: 30px 0;
        align-items: center;
        font-size: 20px;
        background-color: #3d0e5bb3;

        p{
            background-color: #2c2c2c; 
            padding: 4px;
            border-radius: 16px;
            box-shadow: 10px 10px 20px rgb(0, 0, 0);
        }
        h5{
            background-color: #3d0e5bb3;
            font-weight: 500;
        }
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