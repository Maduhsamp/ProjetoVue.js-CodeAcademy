<template>
  <div>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <nav>
    <img src="../assets/LogoAnimePlaza.png" alt="Logo">
    <div class="shadow-effect">
      <i class='bx bxs-home'></i>
      <button><h4>Início</h4></button>
    </div>
    <div class="shadow-effect">
      <i class='bx bxs-info-circle'></i>
      <button><h4>Sobre</h4></button>
    </div>
    <div class="genres shadow-effect">
      <i class='bx bxs-movie-play'></i>
      <select>
        <option value="" disabled selected hidden>Gênero</option>
        <option value="aventura">Aventura</option>
        <option value="acao">Ação</option>
        <option value="drama">Drama</option>
        <option value="terror">Terror</option>
      </select>
    </div>
    <div class="shadow-effect">
      <i class='bx bxs-star'></i>
      <button><h4>Favoritos</h4></button>
    </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss">

  nav {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    background: #3D0E5B;
    color: #fff;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .shadow-effect:hover {
    text-shadow: 1px 1px 10px #fff;
    transition: .5s;
    
    button {
      text-shadow: 1px 1px 10px #fff;
      transition: .5s;
    }
  }

  .genres {
    position: relative;
    display: inline-block;
  }

  .genres::after {
    content: '';
    position: absolute;
    left: 25px;
    bottom: 4px;
    width: 70%;
    height: 3px;
    background: #fff;
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
  }

  nav img {
      margin-left: -5%;
      width: 20%;
      height: auto;
      cursor: pointer;
  }

  nav button {
    position: relative;
    background: transparent;
    border: none;
    color: #fff;
  }

  nav button::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%;
    height: 3px;
    background: #fff;
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
    margin-right: 5px;
  }

  nav select {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.4em;
    background: none;
    border: none;
    color: #fff;
    width: 70%;
    height: auto;
    margin-bottom: 8px;
    outline: none;
    cursor: pointer;
  }

  nav select:hover {
    text-shadow: 1px 1px 10px #fff;
    transition: .5s;
  }

  nav select option {
    background: #3D0E5B;
  }

</style>
