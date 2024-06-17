    <template>
        <div class="container">
        <CardComponent :idGenero="2" nomeGenero="Aventura" limite="25"/>
        <CardComponent :idGenero="2" nomeGenero="" limite="25"/>
        </div>
    </template>
    
    <script>
    import CardComponent from '../components/CardComponent.vue';

    export default {
        name: "AventuraView",
        components: {
            CardComponent,
        }
    }
    </script>
    
    <style scoped>
    
    </style>