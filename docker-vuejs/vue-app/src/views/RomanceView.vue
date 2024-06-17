    <template>
        <div class="container">
        <CardComponent :page="1" idGenero="22" nomeGenero="Romance" limite="25"/>
        <CardComponent :page="2" idGenero="22" nomeGenero="" limite="25"/>
        </div>
    </template>
    
    <script>
    import CardComponent from '../components/CardComponent.vue';

    export default {
        name: "RomanceView",
        components: {
            CardComponent,
        }
    }
    </script>
    
    <style scoped>
    
    </style>