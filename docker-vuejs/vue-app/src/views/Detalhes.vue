<template>
    <div class="card">
        <h1>{{nome}}</h1>
        <h2>{{ nomejapones }}</h2>
        <p>{{ano}}</p>
        <img v-if="imagem" :src="imagem">
        <p>{{ sinopse }}</p>
        <p>Genero</p>
        <p v-for="genero in generos">{{ genero.name }}</p>
    </div>
</template>

<script>
export default {
    name:"Detalhes",

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
    this.axios.get('https://api.jikan.moe/v4/anime/33/full')
    .then((response)=>{
        console.log(response);
        this.nome =response.data.data.title;
        this.nomejapones=response.data.data.title_japanese;
        this.ano =response.data.data.year;
        this.imagem =response.data.data.images.jpg.large_image_url
        this.sinopse =response.data.data.synopsis;
        this.generos =response.data.data.genres
    })
}
}
</script>

<style>
h1{
    color:black
}
img{
    width: 350px;
    height: 500px;
}
</style>