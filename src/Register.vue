<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from './data/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app';

const nickname = ref("");
const username = ref("");
const password = ref("");
const email = ref("");
const message = ref("");
const router = useRouter();

const register = async() => {
    if(!nickname.value || !username.value || !password.value || !email.value) {
        message.value = "資料不可空白";
        return
    }

    try {
        // 使用 Firebase Authentication 註冊
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
        const firebaseUid = userCredential.user.uid

        // 直接寫入 Firestore
        await setDoc(doc(db, 'users', firebaseUid), {
            nickname: nickname.value,
            username: username.value,
            email: email.value,
            createdAt: new Date()
        })

        console.log("firebase寫入成功")

        // 存到 localStorage
        localStorage.setItem('userId', firebaseUid)
        localStorage.setItem('nickname', nickname.value)
        localStorage.setItem('username', username.value)

        message.value = '註冊成功'
        setTimeout(() => router.push('/Login'), 1000)

    } catch(err) {
        console.error("firebase 註冊錯誤->", err)
        if(err instanceof FirebaseError){
            switch(err.code){
                case "auth/email-already-in-use":
                    message.value = "此信箱已被註冊"
                    break
                case "auth/invalid-email":
                    message.value = "信箱格式錯誤"
                    break
                case "auth/weak-password":
                    message.value = "密碼至少需要六個字元"
                    break
                default:
                    message.value = "註冊失敗:" + err.message
            }
        } else {
            message.value = "系統錯誤"
        }
    }
}
</script>

<template>
    <div class="head"></div>
    <div class="container">
        <form @submit.prevent="register">
            <h1>會員註冊</h1>
            <div class="input-box">
                <input v-model="nickname" type="text" placeholder="輸入暱稱" required>
                <i class="fa-solid fa-person"></i>
            </div>
            <div class="input-box">
                <input v-model="username" type="text" name="username" placeholder="輸入帳號" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input v-model="email" type="email" name="email" placeholder="輸入信箱" required>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="input-box">
                <input v-model="password" type="password" name="password" placeholder="輸入密碼" required>
                <i class="fa-solid fa-lock"></i>
            </div>
            <button type="submit" class="register-btn">註冊</button>
            <p>{{ message }}</p>
            <div class="register-link">
                <p>已經有帳號了? <router-link to="/Login">去登入</router-link></p>
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
    border: 2px solid #333;
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

.container .register-btn {
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

.register-btn:hover {
    background: #555;
    color: #fff;
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