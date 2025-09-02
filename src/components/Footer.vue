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
                <p>1234567890</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.footer-container{
    background: black;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #999;
}

.footer-container .footer-top {
    width: 400px;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.follow {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.follow p {
    display: block;
    font-family: "Roboto", sans-serif;
}

.follow .icon {
    display: flex;
    justify-content: center;
    height: 70px;
}

.follow .icon a {
    zoom: 250%;
    margin: 5px;
    cursor: pointer;
    color: #999;
}

.footer-middle {
    width: 400px;
    height: 45%;
}

.footer-middle ul {
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
}

.footer-middle ul li {
    cursor: pointer;
}

.footer-middle ul span {
    background: #999;
    width: 2px;
    height: 18px;
}

.footer-bottom {
    width: 400px;
    height: 10%;
    display: flex;
    justify-content: center;
}

.footer-bottom p{
    height: 5%;
    bottom: 0;
}
</style>