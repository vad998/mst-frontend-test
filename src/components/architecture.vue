<template>
    <div class="col-10 content align-items-center d-flex">
        <div class="col-6 row">
            <div class="col-3"></div>
            <transition name="slide" mode="out-in">
                <div  class="contentText col-7">
                    <h2 class='title'>{{ element_data[0].name }}</h2>
                    <div class='description'>{{ element_data[0].text }}</div>
                    <p class='navigation'>{{ element_data[0].page }}</p>
                </div> 
            </transition>                  
        </div>
        <div class="col-6 illustration align-items-center d-flex">
            <img :src=" require('../assets/' + element_data[0].image)" alt="Архитектура" class="wh-max ml-auto d-flex">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Architecture',
    props: {
        element_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>