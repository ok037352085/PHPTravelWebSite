<script setup>

</script>

<template>
    <footer>
        <div class="footer-container">
            <div class="footer-top">
                <div class="follow">
                    <div>
                        <p>FOLLOW</p>
                    </div>
                    <div class="icon">
                        <a class="line" href="https://lin.ee/3I8FR3n"><i class="fa-brands fa-line"></i></a>
                        <a class="instagram" href="https://www.instagram.com"><i class="fa-brands fa-square-instagram"></i></a>
                        <a class="github" href="https://github.com/ok037352085"><i class="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-middle">
                <ul>
                    <span></span>
                    <li>Home</li>
                    <span></span>
                    <li>News</li>
                    <span></span>
                    <li>About</li>
                    <span></span>
                    <li>Contact Us</li>
                    <span></span>
                    <li>Our Team</li>
                    <span></span>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>© 2025 Jim Yeh. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.footer-container {
  background: black;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;
  padding: 20px 10px;
  box-sizing: border-box;
}

/* 上方社群 */
.footer-container .footer-top {
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.follow {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.follow p {
  font-family: "Roboto", sans-serif;
  font-size: clamp(14px, 2vw, 20px);
}

.follow .icon {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.follow .icon a {
  font-size: 2rem; /* 代替 zoom，更穩定 */
  cursor: pointer;
  color: #999;
}

/* 中間導覽連結 */
.footer-middle {
  max-width: 800px;
  width: 100%;
  margin-bottom: 20px;
}

.footer-middle ul {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap; /* 小螢幕時換行 */
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: clamp(12px, 2vw, 18px);
  font-family: "Roboto", sans-serif;
  padding: 0;
}

.footer-middle ul li {
  cursor: pointer;
}

.footer-middle ul span {
  background: #999;
  width: 2px;
  height: 18px;
}

/* 下方文字 */
.footer-bottom {
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.footer-bottom p {
  font-size: clamp(12px, 1.5vw, 16px);
  margin: 0;
}

/* ============= RWD ============= */
@media (max-width: 600px) {
  .footer-middle ul {
    flex-direction: column; /* 手機改成直式 */
    gap: 8px;
  }
  .footer-middle ul span {
    display: none; /* 手機不顯示分隔線 */
  }
}
</style>
