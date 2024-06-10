<template>
  <div>
    <nav>
    <img src="../assets/LogoAnimePlaza.png" alt="Logo">
      <h4>Início</h4>
      <h4>Sobre</h4>
      <select>
        <option disabled selected>Gênero</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
    </nav>
  </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss">
  nav img {
    margin-left: -10%;
    width: 20%;
    height: auto;
  }

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

  nav select {
    background: none;
    border: none;
    color: #fff;
    width: 15%;
    height: auto;
  }
</style>
