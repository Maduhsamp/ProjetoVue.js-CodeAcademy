<template>
    <Header/>
    <CardDetalhes/>
</template>

<script>
    import CardDetalhes from "../components/CardDetalhes.vue";
    import Header from "../components/Header.vue"
    export default {
        name: "Detalhes",
        components:{
            CardDetalhes,
            Header
        },
    created(){
        this.axios.get('https://api.jikan.moe/v4/anime/20/full')
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

</style>