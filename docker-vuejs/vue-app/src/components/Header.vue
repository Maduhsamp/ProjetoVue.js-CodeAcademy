<template>
  <div>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <nav>
      <router-link to="/" exact><img src="../assets/LogoAnimePlaza.png" alt="Logo"></router-link>
      <div class="shadow-effect">
        <i class='bx bxs-home'></i>
        <router-link to="/"><button><h4>Início</h4></button></router-link>
      </div>
      <div class="shadow-effect">
        <i class='bx bxs-info-circle'></i>
        <router-link to="/sobre"><button><h4>Sobre</h4></button></router-link>
      </div>
      <div class="genres shadow-effect">
        <i class='bx bxs-movie-play'></i>
        <div class="dropdown">
          <div class="select" @click="toggleDropdown">
            <span class="selected">{{ selectedGenre }}</span>
            <div class="caret" :class="{ 'caret-rotate': isDropdownOpen }"></div>
          </div>
          <ul class="menu" :class="{ 'menu-open': isDropdownOpen }">
            <li v-for="genre in genres" :key="genre" @click="selectGenre(genre)" :class="{ 'active': genre === selectedGenre }">{{ genre }}</li>
          </ul>
        </div>
      </div>
      <div class="shadow-effect">
        <i class='bx bxs-star'></i>
        <router-link to="/favoritos"><button><h4>Favoritos</h4></button></router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isDropdownOpen: false,
      selectedGenre: 'Gênero',
      genres: ['Ação', 'Aventura', 'Comédia', 'Fantasia', 'Romance'],
      genreRoutes: {
        'Ação': '/acao',
        'Aventura': '/aventura',
        'Comédia': '/comedia',
        'Fantasia': '/fantasia',
        'Romance': '/romance'
      }
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectGenre(genre) {
      this.selectedGenre = genre;
      this.isDropdownOpen = false; // Fecha o dropdown após selecionar um gênero
      // Redireciona para a rota correspondente ao gênero selecionado
      this.$router.push(this.genreRoutes[genre]);
    }
  }
};
</script>

<style lang="scss" scoped>

  nav {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    background-color: #2A232F;;
    color: #FDFAFF;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h4{
    background-color: #2A232F;
  }
  .shadow-effect{
    background-color: #2A232F;
  }
  .shadow-effect:hover {
    text-shadow: 1px 1px 10px #FDFAFF;
    transition: .5s;
    background-color: #2A232F;;
    
    button {
      text-shadow: 1px 1px 10px #FDFAFF;
      transition: .5s;
      
    }
  }

  .genres {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2A232F;;
  }

  .genres::after {
    content: '';
    position: absolute;
    left: 14%;
    bottom: 3%;
    width: 60%;
    height: 3px;
    background: #FDFAFF;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
  }

  .genres:hover::after {
    transform-origin: left;
    transform: scaleX(1);
    
  }

  nav i {
    font-size: 1.3em;
    margin-right: 5px;
    background-color: #2A232F;;
  }

  a {
    margin-right: -5%;
    width: 280px;
    height: 100px;
    cursor: pointer;
    background-color: #2A232F;;
  }

  nav img {

    margin-left: -10%;
    width:100%;
    height: auto;
    cursor: pointer;
    background-color: #2A232F;
  }

  nav button {
    position: relative;
    background: transparent;
    border: none;
    color: #FDFAFF;
    background-color: #2A232F;
    
  }

  nav button::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%;
    height: 3px;
    background: #FDFAFF;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
  }

  nav button:hover::after {
    transform-origin: left;
    transform: scaleX(1);
    
  }

  .genres i {
    margin-right: 7px;
    margin-bottom: 3%;
    background-color: #2A232F;
  }

  .dropdown {
    background: #2A232F;
    min-width: 10em;
  }

  .dropdown * {
    box-sizing: border-box;
  }

  .select {
    background: #2A232F;
    margin-top: -5%;
    width: 70%;
    color: #FDFAFF;
    font-size: 1.5em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px #2A232F solid;
    border-radius: 0.5em;
    cursor: pointer;
    transition: background 0.3s;
  }

  .selected {
    background: transparent;
  }

  .select-clicked {
    border: 2px #48255e solid;
    box-shadow: 0 0 0.8em #48255e;
  }

  .caret {
    background: transparent;
    width: 0;
    height: 0;
    margin-left: 5%;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #FDFAFF;
    transition: 0.3s;
  }

  .caret-rotate {
    transform: rotate(180deg);
  }

  .menu {
    list-style: none;
    text-align: center;
    padding: 0.2em 0.5em;
    margin-top: -10%;
    background: none;
    border-radius: 16px;
    color: #FDFAFF;
    position: absolute;
    top: 3em;
    left: 33%;
    width: 90%;
    transform: translateX(-50%);
    opacity: 0;
    display: none;
    z-index: 1;
  }

  .menu li {
    background: #2A232F;
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.5em;
    cursor: pointer;
  }

  .menu li:hover {
    background: #FDFAFF;
    color: #2A232F;
    text-shadow: 1px 1px 10px #2A232F;
    transition: .5s;
  }

  .menu-open {
    display: block;
    opacity: 1;
  }

</style>
