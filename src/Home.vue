<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import beach01 from './assets/images/beach01.jpg'
    import beach02 from './assets/images/beach02.jpg'
    import beach03 from './assets/images/beach03.jpg'
    import beach04 from './assets/images/beach04.jpg'
    import grass01 from './assets/images/grass01.jpg'
    import grass02 from './assets/images/grass02.jpg'
    import grass03 from './assets/images/grass03.jpg'
    import grass04 from './assets/images/grass04.jpg'
    import oldtown01 from './assets/images/oldtown01.jpg'
    import oldtown02 from './assets/images/oldtown02.jpg'
    import oldtown03 from './assets/images/oldtown03.jpg'
    import oldtown04 from './assets/images/oldtown04.jpg'
    import treebeach01 from './assets/images/treebeach01.jpg'
    import treebeach02 from './assets/images/treebeach02.jpg'
    import treebeach03 from './assets/images/treebeach03.jpg'
    import treebeach04 from './assets/images/treebeach04.jpg'


    const images = [
        beach01, beach02, beach03, beach04,
        grass01, grass02, grass03, grass04,
        oldtown01, oldtown02, oldtown03, oldtown04,
        treebeach01, treebeach02,treebeach03,treebeach04
    ];

    const currentIndex = ref(1);
    const isTransitioning = ref(true);
    let intervalId = null;

    const nextSlide = () => {
        if(!isTransitioning.value) return;
        // isTransitioning.value = true;
        currentIndex.value++;
        resetPlay();
    };

    const prevSlide = () => {
        if(!isTransitioning) return;
        // isTransitioning.value = true;
        currentIndex.value--;
        resetPlay();
    };
    
    const handleTransitionEnd = () => {
        if(currentIndex.value === images.length + 1){
            isTransitioning.value = false;
            currentIndex.value = 1;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    isTransitioning.value = true;
                });
            });
        }
        if(currentIndex.value === 0){
            isTransitioning.value = false;
            currentIndex.value = images.length;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    isTransitioning.value = true;
                });
            });
        }
    };

    const play = () => {
        if(intervalId)clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 3000);
    };

    const pause = () => {
        if(intervalId){
            clearInterval(intervalId);
            intervalId = null;
        }
    };

    const resetPlay = () => {
        pause();
        play();
    }

    onMounted(() =>{
        play();

        document.addEventListener("visibilitychange", () => {
            if(document.hidden){
                pause();
            }else{
                play();
            }
        });
    });
    onUnmounted(() =>{
        pause();
        document.removeEventListener("visibilitychange", () => {});
    });

    // onActivated(play);
    // onDeactivated(pause);
</script>

<template>
    <div class="container">
        <div class="head"></div>
        <div class="homepage-title">
            <h1>XXOO旅遊網站</h1>
            <p>~xxootravel~</p>
        </div>
        <div id="image-wheel">
             <div class="carousel-container" @mouseleave="play" @mouseenter="pause">
                <div class="carousel-track"
                :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.8s ease-in-out': 'none' }"
                @transitionend="handleTransitionEnd"
                >
                    <div class="carousel-slide">
                        <img :src="images[images.length - 1]" alt="clone-last" />
                    </div>
                    <div class="carousel-slide" v-for="(img, index) in images" :key="index">
                        <img :src="img" alt="slide" />
                    </div>
                    <div class="carousel-slide">
                        <img :src="images[0]" alt="clone-first" />
                    </div>
                </div>
                <button class="carousel-btn prev" @click="prevSlide">‹</button>
                <button class="carousel-btn next" @click="nextSlide">›</button>
             </div>
        </div>
        <div class="info">
            <div class="info-news">
                <h1>最新消息</h1>
                <ul>
                    <li><a href="https://news.ltn.com.tw/news/Miaoli/breakingnews/5147655">國道一號造橋交流道開工!</a></li>
                    <li><a href="https://miaolitravel.net/Article.aspx?sNo=04008396">「夏趴一下」2025苗栗海洋觀光季搖滾之夜 星光閃耀通霄海水浴場</a></li>
                    <li><a href="https://www.chinatimes.com/realtimenews/20250816002180-260421?chdtv">苗栗攜手觀光業者征戰新加坡旅展　山城秘境魅力行銷國際</a></li>
                    <li><a href="https://news.ltn.com.tw/news/Miaoli/breakingnews/5140346">避免塞車！苗栗海洋觀光季16日登場 免費接駁、停車資訊一次看</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background: #999;
}

.head {
    width: 100%;
    height: 70px;
}

.homepage-title {
    right: 100%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.homepage-title h1 {
    font-size: 52px;
}

.homepage-title p {
    font-size: 18px;
}

#image-wheel {
    width: 100%;
    height: 540px;
    top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.carousel-container {
    width: 980px;
    height: 540px;
    position: relative;
    margin: 0 auto;
}

.carousel-track {
    display: flex;
    transition: transform 0.8s ease-in-out;
}

.carousel-slide {
    min-width: 100%;
    height: 100%;
}

.carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info {
    margin-left: 70px;
    margin-right: 70px;
    padding: 20px;
}

.info .info-news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info .info-news ul {
    font-family: "Roboto", sans-serif;
    list-style: none;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info .info-news ul li {
    margin: 10px;

}

.info .info-news ul li a {
    color: black;
    font-size: 18px;
    font-weight: 700;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.1);
  border: none;
  border-radius: 40%;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
}

.carousel-btn:hover {
  background: rgba(0,0,0,0.3);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

@media (max-width: 1199px) {
  .homepage-title h1 {
    font-size: 40px;
  }
  .homepage-title p {
    font-size: 16px;
  }

  .carousel-container {
    width: 90%; /* 不再固定 980px，跟隨容器 */
    height: 400px;
  }

  #image-wheel {
    height: 400px;
  }

  .info {
    margin-left: 30px;
    margin-right: 30px;
  }

  .info .info-news ul li a {
    font-size: 16px;
  }
}

@media (max-width: 767px) {
  .homepage-title h1 {
    font-size: 28px;
    text-align: center;
  }
  .homepage-title p {
    font-size: 14px;
    text-align: center;
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
  }

  .carousel-btn {
    font-size: 1.5rem;
    padding: 0.3rem 0.6rem;
  }

  .info {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
  }

  .info .info-news ul li a {
    font-size: 14px;
  }
}
</style>