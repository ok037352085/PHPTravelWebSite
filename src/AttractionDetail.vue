<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import attractions from './data/attractions.json'

const route = useRoute()
const spot = attractions.find(item => item.id === Number(route.params.id))

const selectedImage = computed(() => {
  if (!spot) return ''
  return new URL(`./assets/images/cardsImg/${spot.image}`, import.meta.url).href
})

const previous = () => {
    window.history.back();
}

</script> 

<template>
    <div class="head"></div>
  <div class="container" v-if="spot">
    <div class="previous" @click="previous">
        <i class="fa-solid fa-angle-left"></i>
        <p>回上一頁</p>
    </div>
    <h1>{{ spot.name }}</h1>
    <div class="img">
        <img :src="selectedImage" :alt="spot.name" />
    </div>
    <div class="attraction-content">
        <h2>地點：</h2>
        <p class="location-text"><a :href="spot.mapUrl" target="_blank">{{spot.location}}</a><i class="fa-solid fa-location-dot"></i></p>
        <h2>簡介：</h2>
        <p>{{ spot.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>找不到該景點資料</p>
  </div>
</template>

<style scoped>
.head{
    height:70px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(175deg,rgba(235, 215, 120, 1) 9%, rgba(173, 220, 237, 1) 23%, rgba(149, 219, 245, 1) 41%, rgba(108, 182, 235, 1) 73%, rgba(19, 145, 27, 1) 100%);
    background-size: 200% 200%;
    animation: bganimation 10s linear alternate infinite;
}

@keyframes bganimation {
    0%{
        background-position: 0% 10%;
    }
    50%{
        background-position: 50% 100%;
    }
    100%{
        background-position: 0% 10%;
    }
}

img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  margin: 1rem 0;
  overflow: hidden;
}

.container .previous {
    position: absolute; 
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
}

.container .previous:hover {
    transform: scale(1.2);
}

.previous i {
    font-size: 36px;
}

h1 {
    font-size: 48px;
}

.img {
    width: 60%;
}

.attraction-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10rem;
}

.attraction-content p {
    font-weight: 500;
    font-size: 20px;
    transition: 0.1s;
}

.attraction-content p a {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.attraction-content .location-text:hover {
    transform: scale(1.01);
    text-decoration: underline;
}

@media (max-width: 767px) {
    .previous p {
        display: none;
    }
}
</style>
