<script setup>
    import { ref, computed } from 'vue'
    import attractions from './data/attractions.json'

    const selectedId = ref("") //下拉式選單的選項
    const itinerary = ref([])  //行程清單(最多三個)
    const showModal = ref(false)
    const tripName = ref("")

    //取得目前選中的景點
    const selectedSpot = computed(() => {
        return attractions.find(item => item.id === Number(selectedId.value))
    })

    //加入行程
    const addSpot = () => {
        if(!selectedSpot.value) return
        if(itinerary.value.length >= 3){
            alert('最多三個')
            return
        }
            
        //避免重複加入
        if(!itinerary.value.find(s => s.id === selectedSpot.value.id)){
            itinerary.value.push(selectedSpot.value)
        }
    }

    //移除行程中的景點
    const removeSpot = (id) => {
        itinerary.value = itinerary.value.filter(item => item.id !== id)
    } 

    //辨別行程數量是否完整
    const canSave = computed(() => {
        return itinerary.value.length == 3
    })

    const openSaveModal = () => {
        if(itinerary.value.length < 3){
            alert("請先安排完整的行程")
            return
        }
        const userId = localStorage.getItem("userId")
        if(!userId) {
            alert("error")
            return
        }
        showModal.value = true
    }

    //儲存到localStorage
    const saveItinerary = () => {
        if(!tripName.value.trim()){
            alert('輸入行程名稱')
            return
        }

        const userId = localStorage.getItem("userId")
        //如果localStorage沒有savedTrips，就給一個空物件
        const allTrips = JSON.parse(localStorage.getItem("savedTrips")) || {}

        if(!allTrips[userId]){
            allTrips[userId] = []
        }

        allTrips[userId].push({
            tripName: tripName.value,
            spots: itinerary.value
        })

        localStorage.setItem("savedTrips", JSON.stringify(allTrips))

        //清空 & 關閉
        tripName.value = ""
        itinerary.value = []
        showModal.value = false
        alert('添加成功')
    }
</script>

<template>
    <div class="head"></div>
    <div class="schedule-container">
        <!-- 左邊：選擇景點 -->
        <div class="left-panel">
            <h2>自訂遊覽順序</h2>
            <select v-model="selectedId">
                <option value="" disabled>請選擇景點</option>
                <option v-for="spot in attractions" :key="spot.id" :value="spot.id">
                {{ spot.name }}
                </option>
            </select>
            <div class="left-container" v-if="selectedSpot">
                <div class="image-wrapper">
                    <img :src="selectedSpot.image" :alt="selectedSpot.name" style="max-width: 100%;" />
                </div>
                <button @click="addSpot">加入行程</button>
            </div>
        </div>

        <!-- 右邊：行程清單 -->
        <div class="right-panel">
        <h2>我的行程</h2>
        <h3 class="placeholder" v-show="itinerary.length === 0">尚無行程</h3>
        <div class="spot-item" v-for="spot in itinerary" :key="spot.id">
            <h3>{{ spot.name }}</h3>
            <button @click="removeSpot(spot.id)">移除</button>
        </div>
        <button  class="saveBtn" v-show="canSave" @click="openSaveModal">保存</button>
        </div>
        <div class="modal-overlay" v-if="showModal" @click.self="showModal = false">
            <div class="modal">
                <p>幫行程命名吧</p>
                <input v-model="tripName" placeholder="輸入行程名稱" maxlength="8">
                <button @click="saveItinerary">儲存</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.head {
    width: 100%;
    height: 70px;
}

.schedule-container {
    display: flex;
    gap: 20px;
    padding: 20px
}

/* 左邊 */
.left-panel {
    flex: 2;
    background: #888;
    padding: 20px;
    border-radius: 20px;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.left-panel select {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
    background: #555;
    color: #fff;
    border: none;
    border-radius: 20px;
    outline: none;
}

select,::picker(select) {
    appearance: base-select;
    background: #555;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 20px;
    margin-top: 5px;
}

.left-panel .left-container {
    width: 100%;
    height: 100%;
}

.left-panel .image-wrapper {
    width: 100%;
    height: 300px;
    border-radius: 20px;
    margin: 10px 0;
    overflow: hidden;
    background: #fff;
}

.left-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.left-panel button {
    background: #555;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: white;
    border: none;
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
}
.left-panel button:hover {
    background: #000;
}

/* 右邊 */
.right-panel {
    position: relative;
    flex: 3;
    background: transparent;
    padding: 20px;
    border-radius: 20px;
    height: 600px;
}

.right-panel h2 {
    display: flex;
    justify-content: center;
    
}

.right-panel .placeholder {
    display: flex;
    justify-content: center;
    height: 90%;
    align-items: center;
    font-size: 24px;
    color: #555;
}

.spot-item {
    padding: 10px;
}

.spot-item {
    display: flex;
    justify-content: space-between;
}
.spot-item button {
    position: relative;
    width: max-content;
    background: none;
    color: white;
    font-size: 16px;
    border: none;
    padding: 5px 5px;
    cursor: pointer;
    transition: 0.2s;
}

.spot-item button::after{
    content: "";
    background: #000;
    height: 3px;
    width: 0%;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.2s;
    border-radius: 50px;
}

.spot-item button:hover::after {
    width: 100%;
}

.saveBtn {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
    padding: 5px 20px;
    background: #555;
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}

.saveBtn:hover {
    background: #000;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
}

.modal {
    background: #000;
    padding: 60px 120px 60px 120px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.modal p {
    color: #fff;
    font-size: 24px;
}

.modal input {
    font-size: 18px;
    border: none;
    border-radius: 20px;
    padding: 5px 10px 5px 10px;
    outline: none;
}

.modal button {
    font-size: 16px;
    border: none;
    padding: 5px 10px 5px 10px;
    background: #fff;
    border-radius: 20px;
    transition: 0.2s;
}

.modal button:hover {
    transform: scale(1.05);
}

@media (max-width: 1199px) {

}

@media (max-width: 767px) {
    .schedule-container{
        display: flex;
        flex-direction: column;
    }

    .saveBtn {
        position: absolute;
        margin: 0;
    }
}

</style>