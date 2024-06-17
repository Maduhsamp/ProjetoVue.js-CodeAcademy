<template>
  <div class="body">
    <Header />
    <Footer/>
</div>
</template>
<script>
import InicioView from './views/InicioView.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    InicioView,
    Footer,
  },
  
}
</script>
<style lang="scss">
*{
  background-color: #F4F3F8;
  font: poppins;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
