<template>
    <div>
        <div class="about">
            <div class="text">
            <h1>Sobre este site</h1>
            <p>Este site foi criado utilizando a API do MyAnimeList, um popular site de animes e mangás.<br>
            Ao utilizar a API do MyAnimeList, foi possível criar este site com algumas funcionalidades, como:<br>
            - Exibir informações sobre animes: Cada anime possui uma página com informações detalhadas, 
            como título, ano de lançamento, sinopse e gênero;<br>
            - Filtrar por gênero;<br>
            - Salvar os preferidos na tela de favoritos.
            </p>
            </div>
            <img src="../assets/MyAnimeListImage.png" alt="ImagemMyAnimeList">
        </div>
    </div>

</template>

<script>

</script>

<style lang="scss" scoped>
    .about {
        background: #2A232F;
        display: flex;
        align-items: center;
        margin: 100px 50px;
        border: 30px solid #2A232F;
        border-radius: 16px;

        h1 {
            background: #2A232F;
            color: #FDFAFF;
        }

        p {
            background: #2A232F;
            color: #FDFAFF;
            font-size: 1.2em;
            font-weight: 300;
        }

        img {
            width: 400px;
            height: 300px;
        }
    }

    .text {
        background: #2A232F;
        margin: 20px;
    }
</style>