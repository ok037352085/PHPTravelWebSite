<script setup>
    import { ref } from 'vue'

    const userId = ref("")
    const username = ref("")
    const password = ref("")
    const message = ref("")

    const login = async() => {
        try{
            const res = await fetch("http://localhost:8888/backend/login.php",{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    userId: userId.value,
                    username: username.value,
                    password: password.value
                })
            })
            const data = await res.json()
            if(data.status === "success"){
                message.value = "✅" + data.message
                localStorage.setItem("username", data.user);
                localStorage.setItem("userId", data.userId);
                window.location.href = '/Member';
            }else{
                message.value = "❌" + data.message
            }
        }catch(err){
            message.value = "伺服器錯誤：" + err
        }
    }
</script>

<template>
    <div class="head"></div>
    <div class="container">
        <form @submit.prevent="login">
            <h1>會員登入</h1>
            <div class="input-box">
                <input v-model="username" type="text" name="username" placeholder="輸入帳號" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input v-model="password" type="password" name="password" placeholder="輸入密碼" required>
                <i class="fa-solid fa-lock"></i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox">記住帳號</label>
                <a href="#">忘記密碼了嗎?</a>
            </div>
            <button class="btn" type="submit">登入</button>
            <p>{{ message }}</p>
            <div class="register-link">
                <p>還沒註冊嗎? <router-link to="/register">註冊</router-link></p>
            </div>
        </form>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.head {
    width: 100%;
    height: 70px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

form {
    background: #000;
    width: 420px;
    color: white;
    border-radius: 20px;
    padding: 30px 40px;
}

.container h1 {
    font-size: 36px;
    text-align: center;
}

.container .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    margin:  30px 0;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    box-sizing: border-box;
    border: none;
    outline: none;
    border: 2px solid #555;
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
    color: #fff;
}

.input-box i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
}

.container .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}

.remember-forgot label input {
    accent-color: #fff;
    margin-right: 3px;
}

.remember-forgot a {
    color: #fff;
    text-decoration: none;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.container .btn {
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    /* box-shadow: 0 0 10px #222; */
    font-size: 16px;
    color: #555;
    font-weight: 600;
    transition: .2s ease;
}

.container .btn:hover {
    box-shadow: 0 0 10px #333;
}

.container .register-link {
    font-size: 14.5px;
    text-align: center;
    margin-top: 20px;
}

.register-link p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.register-link p a:hover {
    text-decoration: underline;
}
</style>