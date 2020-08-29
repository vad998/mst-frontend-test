<template>
    <div class="v-footer">
        <p class="footerText">Разработано в MST &emsp; | &emsp; 2018</p>
    </div>
</template>

<script>
export default {
    name: "v-footer"
}
</script>

<style>
    .v-footer {
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 15px;

        letter-spacing: 0.175729px;
        text-transform: uppercase;

        color: #505050;

        position: absolute;
        height: 60px;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    .footerText {
        margin: 23px 0 22px 60px;
    }
</style>