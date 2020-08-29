<template>
    <div class="v-header">
        <nav class="navbar navbar-expand-lg nav-padding navbar-light">
            <a href="#" class="navbar-brand p-0 m-0 d-flex">
                <img src="../assets/IconLogo.svg" alt="Logo" width="70px" height="70px" class="logo-padding">
                <h1 class="brand-text">Первомайская</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse menu">
                <ul class="navbar-nav ml-auto" id="list">
                    <li class="nav-item selected"><a href="#" class="">
                        О комплексе
                    </a></li>
                    <li class="nav-item"><a href="#">
                        Особенности
                    </a></li>
                    <li class="nav-item"><a href="#">
                        Пентхаусы
                    </a></li>
                    <li class="nav-item"><a href="#">
                        Выбрать квартиру
                    </a></li>
                </ul>
                <div class="justify-content-end d-flex menu-end ml-auto">
                    <p class="tel p-0">8 888 888 88 88</p>
                    <img src="../assets/Burger.svg" alt="Burger" width="70px" height="70px" class="burger">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "v-header"
    }
</script>

<style>
.v-header {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 1000;
}

.nav-padding {
    padding: 22px 25px 0 25px;
}

.logo-padding {
    margin-top: 3px;
}

.brand-text {
    margin: 0 0 0 23px;

    font-family: Gilroy;
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 21px;
    
    letter-spacing: 0.290629px;
    text-transform: uppercase;
    
    color: #262525;
}

.menu {
    align-items: flex-start;
}

.nav-item {
    margin-right: 56px;

    font-family: Gilroy;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 15px;

    letter-spacing: 0.8px;
    text-transform: uppercase;

    color: #262525;
}

.nav-item:last-child {
    margin-right: 0;
}

.selected, .nav-item:hover {
    border-bottom: 4px solid #D88F5E;
    padding-bottom: 7px;
    padding-right: 6px;
    padding-left: 6px;
}

.burger {
    margin-top: 3px;
}

.tel {
    margin-right: 26px;

    font-family: Gilroy;
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 21px;

    letter-spacing: 0.290629px;
    text-transform: uppercase;

    color: #262525;
}
</style>