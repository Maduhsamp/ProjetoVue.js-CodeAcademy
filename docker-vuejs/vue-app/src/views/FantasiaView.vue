    <template>
        <div class="container">
        <CardComponent :page="1" idGenero="10" nomeGenero="Fantasia" limite="25"/>
        <CardComponent :page="2" idGenero="10" nomeGenero="" limite="25"/>
        </div>
    </template>
    
    <script>
    import CardComponent from '../components/CardComponent.vue';

    export default {
        name: "FantasiaView",
        components: {
            CardComponent,
        }
    }
    </script>
    
    <style scoped>
    
    </style>