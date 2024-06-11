<template>
    <div class="card">
        <h1>{{title}}</h1>
        <img>
    </div>
</template>

<script>
export default {
    name:"Detalhes",

    data(){
        return{
            title: '',
            image: '',
        }
    },

    created(){
        this.fetchTitle();
    },
    methods: {
        async fetchTitle() {
            const response = await axios.get('https://api.jikan.moe/v4/anime/1/full'); // URL da API fornecida
            const data = response.data;
            
            // Acessar o título do anime
            this.title = data.data.title;
            this.image=data.data.large_image_url
        }
    }
};
</script>

<style>
h1{
    color:black
}
</style>