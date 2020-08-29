<template>
    <div class="v-about-complex d-flex align-items-center row justify-content-between">
        <ul class="col-2">
            <li v-for="element in elements" :key="element.id" 
            class="sectionMenu-item"
            @click="viewCurrent(element.id, $event)">
            <router-link :to="'/' + element.link" class="holder">{{ element.name }}<div class="sectionMenuActive"></div></router-link></li>
        </ul>
        <transition name="slide" mode="out-in">
            <router-view
                :element_data="elements"
            />
        </transition>
    </div>
</template>

<script>
export default {
    name: "v-about-complex",
    data() {
        return {
            elements: [
                {
                    id: "1",
                    name: "Архитектура",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur illum blanditiis voluptatem ullam, laborum consequatur quam aliquid esse, est, ab ex minus exercitationem nostrum! Sint optio voluptatibus asperiores aut!",
                    page: "1 / 6",
                    image: "1.png",
                    link: "architecture"
                },
                {
                    id: "2",
                    name: "Благоустройство",
                    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rerum quam, deleniti quidem magni, rem quia aperiam velit reprehenderit distinctio delectus. Perferendis repellat soluta ducimus deleniti dolorem tempore in quo?",
                    page: "2 / 6",
                    image: "2.png",
                    link: "landscaping"
                },
                {
                    id: "3",
                    name: "Безопастность",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed expedita nulla iure quos fuga esse nobis, pariatur veritatis aspernatur iste labore velit rem numquam cumque ullam minima veniam explicabo.",
                    page: "3 / 6",
                    image: "3.png",
                    link: "safety"
                },
                {
                    id: "4",
                    name: "Инженерия",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus impedit, adipisci nihil non commodi ratione fugit quia reprehenderit illo magnam perferendis dolore consequatur quos! Voluptas porro repudiandae itaque nemo!",
                    page: "4 / 6",
                    image: "4.png",
                    link: "engineering"
                },
                {
                    id: "5",
                    name: "Инфраструктура",
                    text: "Sequi praesentium atque numquam ut, totam asperiores veniam pariatur tenetur perferendis architecto ad! Reiciendis, neque ad repellat sunt expedita inventore ullam commodi nam tempore quae dolor impedit dicta ipsa est.",
                    page: "5 / 6",
                    image: "5.png",
                    link: "infrastructure"
                },
                {
                    id: "6",
                    name: "Транспортная доступность",
                    text: "Nulla, aliquid nisi ut beatae natus soluta quod dolores non labore dolorum enim velit eaque. Molestiae, assumenda hic. Sunt nihil quibusdam nesciunt ducimus. Ab, eligendi molestias dignissimos voluptate nesciunt hic.",
                    page: "6 / 6",
                    image: "6.png",
                    link: "transportAccessibility"
                }
            ]
        }
    },
    methods: {    
        viewCurrent(id, e) {
            var options = document.getElementsByClassName("sectionMenu-item"); 
            options.forEach(function(o){
            o.className = "sectionMenu-item";
            });
            e.target.className = e.target.className ==" selected-sectionMenu"?" ":" selected-sectionMenu";
        }
    }
}
</script>

<style>
    .v-about-complex {
        position: absolute;
        top: 60px;
        bottom: 60px;
        left: 60px;
        right: 60px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        max-width: 100%;
    }

    .row {
        margin: 0;
    }

    .col-10, .col-7, .col-6, .col-3, .col-2 {
        padding: 0;
    }

    .sectionMenu-item {
        height: 15px;
        left: 0px;
        width: max-content;

        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.567739px;

        color: #505050;
        margin-bottom: 32px;
    }

    .selected-sectionMenu {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.567739px;
        text-transform: uppercase;

        color: #262525;
    }

    .selected-sectionMenu .sectionMenuActive {
        display: block;
    }

    .holder {
        position: relative;
    }

    .sectionMenuActive {
        position: relative;
        width: 108%;
        height: 9px;
        left: -4%;
        top: -8px;
        z-index: -1;
        display: none;

        background: #EBD8CC;
    }

    .holder:hover .sectionMenuActive {
        display: block;
    }

    .sectionMenu-item:last-child {
        margin-bottom: 0;
    }

    .content {
        background-color: #F0F0F0;
        height: 100%;
    }

    .illustration {
        height: 100%;
    }

    .wh-max {
        max-width: 100%;
        max-height: 100%;
    }

    .slide-enter, .slide-leave-to {
        transform:  translateX(50px);
        opacity: 0;
    }
    .slide-enter-active, .slide-leave-active {
        transition:  1s;
    }
    .slide-enter-to, .slide-leave {
        transform:  translateX(0px);
        opacity: 1;
    }
</style>