<template>
    <div class="footer">
                <p>Todos os Direitos Reservados ©</p>
            <div class="links">
                <ul>
                    <li><a href="https://jikan.moe/">API</a></li>
                    <li><a href="#"> | </a></li>
                    <li><a href="https://instituto3c.com.br/o-instituto-3c/">Code Academy</a></li>
                    <li><a href="#"> | </a></li>
                    <li><a href="https://www.instagram.com/instituto3cplus/">Instagram</a></li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    name:"Footer",
}
</script>

<style lang="scss" scoped>
*{

    background-color: #2A232F;
    color: #FDFAFF;
}
.footer{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-top: 50px;
}
ul{
    padding:0px;
}
.links ul li{
    display:inline;
    text-decoration: none;
    a{
    text-decoration: none;
    }
}
a:hover{
    background-color:#FDFAFF;
    color :#2A232F;
}
</style>