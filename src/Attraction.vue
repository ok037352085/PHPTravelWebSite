<script setup>
    import { useRouter } from 'vue-router' 
    import attractions from './data/attractions.json'

    const router = useRouter()

    const goToDetail = (id) => {
        router.push(`/attraction/${id}`)
    }
</script>

<template>
    <div class="head"></div>
    <div class="container">
        <div class="title">
            <h1>景點介紹</h1>
            <p>---探索苗栗的自然與人文之美---</p>
        </div>
        <div class="card-container">
            <div
                class="card" v-for="item in attractions"
                :key="item.id"
                @click="goToDetail(item.id)"
            >
            <img :src="item.image" :alt="item.name">
            <h2>{{ item.name }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.head {
    width: 100%;
    height: 70px;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
    gap: 6rem;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    box-sizing: border-box;
}

.card-container .card{
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    transition: calc(0.2s);
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
}

.card-container .card:hover {
    transform: scale(1.01);
        box-shadow: 0px 4px 8px rgba(0,0,0,0.5);
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
</style>