<template>
    <CardDetalhes :id="id"/>
</template>

<script>
    import CardDetalhes from "../components/CardDetalhes.vue";
    export default {
        name: "Detalhes",
        components:{
            CardDetalhes,
        },
        data(){
            return{
                id: ''
            }
        },
    created(){
        this.id = this.$route.params.inputId;
    }
}
</script>

<style>

</style>