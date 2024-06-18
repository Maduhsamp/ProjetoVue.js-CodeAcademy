<template>
  <div class="container" ref="scrollContainer" @scroll="handleScroll">
    <CardComponent :page="1" idGenero="10" nomeGenero="Fantasia" limite="25" />
    <CardComponent v-if="currentPage >= 2" :page="2" idGenero="10" nomeGenero="" limite="25" />
    <div v-if="loading" class="loading">Carregando...</div>
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';

export default {
  name: "AcaoView",
  components: {
    CardComponent,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 25,
      loading: false,
    };
  },
  methods: {
    handleScroll() {
      const container = this.$refs.scrollContainer;
      if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        this.loadNextPage();
      }
    },
    loadNextPage() {
      if (this.loading) return; 

      this.loading = true; 

      setTimeout(() => {
        this.currentPage++;
        this.loading = false; 
      }, 1000); 
    }
  }
};
</script>

<style scoped>
.loading {
  text-align: center;
  margin-top: 20px;
  font-style: italic;
  color: #999;
}

.container {
  height: 700px; 
  overflow-y: scroll;
}
</style>
