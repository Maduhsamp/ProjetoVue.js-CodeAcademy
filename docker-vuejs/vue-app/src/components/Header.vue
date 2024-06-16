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
      <ul class="menu">
  <li>
    <a href="#">Parent Link</a>
    
    <ul>
      <li><a href="#">Child Link</a></li>
      <li><a href="#">Child Link</a></li>
      <li><a href="#">Child Link</a></li>
      <li><a href="#">Child Link</a></li>
    </ul>
  </li>
</ul>
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
    name: "Header"
}
</script>

<style lang="scss" scoped>

  nav {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    background-color: #3D0E5B;;
    color: #fff;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  h4{
    background-color: #3D0E5B;
  }
  .shadow-effect{
    background-color: #3D0E5B;
  }
  .shadow-effect:hover {
    text-shadow: 1px 1px 10px #fff;
    transition: .5s;
    background-color: #3D0E5B;;
    
    button {
      text-shadow: 1px 1px 10px #fff;
      transition: .5s;
      
    }
  }

  .genres {
    position: relative;
    display: inline-block;
    background-color: #3D0E5B;;
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
    margin-right: 5px;
    background-color: #3D0E5B;;
  }

  a {
    margin-right: -5%;
    width: 280px;
    height: 100px;
    cursor: pointer;
    background-color: #3D0E5B;;
  }

  nav img {
    margin-left: -10%;
    width: 100%;
    height: auto;
    cursor: pointer;
    background-color: #3D0E5B;
  }

  nav button {
    position: relative;
    background: transparent;
    border: none;
    color: #fff;
    background-color: #3D0E5B;
    
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
    margin-right: 10px;
    background-color: #3D0E5B;
  }

  .menu {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 200px;
    
  }

  .menu > li > a {
    background: blue;
    color: #fff;
    display: block;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    
  }

  .menu ul {
    background: #ddd;
    height: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    transition: all .5s ease;
    top: 35px;
    width: 100%;
    padding-left: 0;
  }

  .menu li:hover ul {
    height: 200px;
    opacity: 1;
    transform: translateY(0);
  }

  .menu ul a {
    color: #000;
    display: block;
    padding: 5px 20px;
    
  }

</style>
