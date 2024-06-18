<template>
    <div class="container">
        <div class="card">
            <img v-if="imagem" :src="imagem">
            <div class="info">
                <h1 >{{nome}}</h1>
                <h3>{{ nomejapones }}</h3>
                <p>Ano de lançamento: {{ano}}</p>
                <div class="sinopse">
                    <h3>Sinopse</h3>
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
        background-color: #2A232F;
        border-radius: 24px;
        width: 100%;
        color: #FDFAFF;
        display: flex;
        flex-direction: row;
    } 
    .info{
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: left;
        background-color: #2A232F;
        border-radius: 24px;
        h1{
            margin-left: 30px;
            background-color: #2A232F;
        }
        h3{
            margin-left:30px;
            background-color: #2A232F;
        }
        p{
            margin-left:30px;
            background-color: #2A232F;
        }
    }
    .sinopse{
        background: #1B171F;
        border-radius: 16px;
        padding: 30px;  
        margin-right: 40px;
        
        h3{
            margin: 0 0 10px;
            background: #1B171F;
        }
        p{
            margin:0;
            background:#1B171F;
            border: 1px solid #18171F;
        }
    }

    .genero{
        display:flex;
        margin: 30px 0;
        align-items: center;
        font-size: 20px;
        background-color: #2A232F;
        p{
            background-color: #18171F; 
            padding:5px 20px;
            border-radius: 16px;
            
            
        }
        h5{
            background-color: #2A232F;
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