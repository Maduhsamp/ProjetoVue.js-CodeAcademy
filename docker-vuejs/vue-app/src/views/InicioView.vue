<template>
  <div class="cards">
          <h1>Ação</h1>
           <ActionCardComponent />
          <h1>Aventura</h1>
           <AventureCardComponent />
          <h1>Comédia</h1>
           <!-- <ComedyCardComponent />
          <h1>Fantasia</h1>
           <FantasyCardComponent />
          <h1>Ficção</h1>
           <FicctionCardComponent /> -->
  </div>
</template>

<script>
import ActionCardComponent from '../components/ActionCardComponent.vue';
import AventureCardComponent from '../components/AventureCardComponent.vue';
import ComedyCardComponent from '../components/ComedyCardComponent.vue';
import FantasyCardComponent from '../components/FantasyCardComponent.vue';
import FicctionCardComponent from '../components/FicctionCardComponent.vue';

export default {
   name: "InicioView",
   components: {
    ActionCardComponent,
    AventureCardComponent,
    ComedyCardComponent,
    FantasyCardComponent,
    FicctionCardComponent
   }
}
</script>

<style scoped>
.cards {
  margin: 0 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>