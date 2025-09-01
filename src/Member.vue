<script setup>
    import { ref, onMounted } from 'vue'

    const userId = ref("")
    const savedItinerary = ref([])

    onMounted(() => {
        userId.value = localStorage.getItem("userId")
        if(userId.value){
            const allTrips = JSON.parse(localStorage.getItem("savedTrips")) || {}
            savedItinerary.value = allTrips[userId.value] || []
        }
    })

    const cleanItinerary = (index) => {
        savedItinerary.value.splice(index, 1);

        const allTrips = JSON.parse(localStorage.getItem("savedTrips")) || {}
        allTrips[userId.value] = savedItinerary.value
        localStorage.setItem("savedTrips", JSON.stringify(allTrips));
    }

    const message = ref("");

    const sendMessage = async () => {
    if (!message.value.trim()) {
        alert("請輸入留言");
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.value }),
        });

        const data = await res.json();
        alert(data.msg);
        message.value = ""; // 清空輸入框
    } catch (error) {
        alert("寄送失敗，請稍後再試");
        console.error(error);
    }
    };

</script>

<template>
    <div class="head"></div>
    <div class="container">
        <h1 >歡迎回來，{{ userId }}</h1>
        <div class="member">
            <!-- 收藏景點 -->
            <div class="member-left">
                <h2>我的收藏景點</h2>
                <div class="trip-container" v-if="savedItinerary.length > 0">
                    <div class="savedItinerary" v-for="(trip, index) in savedItinerary" :key="index">
                        <div class="trip-title">
                            <h3>{{ trip.tripName }}</h3>
                            <button class="delBtn" @click="cleanItinerary(index)"><i class="fa-solid fa-xmark"></i></button>
                            <div class="underline"></div>
                        </div>
                        <ul>
                            <li v-for="spot in trip.spots" :key="spot.id">
                                {{ spot.name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <p v-else>尚未儲存任何行程</p>
            </div>
            <!-- 留言板 -->
            <div class="member-right">
                <h2>留言板</h2>
                <textarea v-model="message"></textarea>
                <button class="saveMsg" @click="sendMessage">發送</button>
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
    width: 100%;
    margin: 0 auto;
}
.container h1 {
    padding: 30px;
}
.member {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: nowrap;
}

.member-left, .member-right {
    /* background: #888; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 10px;
    color: #fff;
    border-radius: 20px;
}

.member-left {
    width: max-content;
    height: 100%;
}

.trip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.savedItinerary {
    background: #555;
    color: #fff;
    padding: 10px 15px;
    border-radius: 10px;
    min-width: 140px;
    text-align: left;
    flex: 0 1 auto;
}

.trip-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
}

.trip-title h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
}

.trip-title .delBtn {
    width: max-content;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
}

.trip-title .underline {
    width: 80%;
    height: 3px;
    position: absolute;
    bottom: 0;
    background: #fff;
    border-radius: 20px;
}

.delBtn:hover {
    transform: scale(1.2);
}

.savedItinerary ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.member-left p {
    font-size: 24px;
}

.member-left img {
    border: 3px solid black;
    border-radius: 20px;
}

.member-right textarea {
    width: 90%;
    min-height: 200px;
    resize: vertical;
    background: #fff;
    margin: 10px 40px;
    padding: 20px;
    border: none;
    outline: none;
    font-size: 18px;
    border-radius: 20px;
}

@media (max-width: 767px) {
    .member {
        flex-direction: column;
        align-items: stretch;
    }

    .member-left, .member-right {
        width: 90%;
        margin: 10px auto;
    }

    .savedItinerary {
        flex: 1 1 100%;
        text-align: left;
    }
}
</style>