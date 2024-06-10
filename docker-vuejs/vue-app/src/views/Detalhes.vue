<template>
    <div class="card">
        <h1>{{nome}}</h1>
    </div>
</template>

<script>
export default {
    name:"Detalhes",

    data(){
        return{
            nome: '',
        }
    },

created(){
    this.axios.get('https://api.jikan.moe/v4/anime/01/full')
    .then((response)=>{
        this.nome =response.data.results[0].title;
        console.log(response.data.results);
    })
}
}
</script>

<style>
h1{
    color:black
}
</style>