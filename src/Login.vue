<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { db } from './data/firebase'
    import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
    import { doc, getDoc } from 'firebase/firestore'
    import Toast from './components/Toast.vue'

    const email = ref("")
    const password = ref("")
    const message = ref("")
    const router = useRouter()


    const login = async() => {
        try{
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email.value,
                password.value
            )

            const user = userCredential.user;

            //從firebase抓取使用者資料
            const userDocRef = doc(db, "users", user.uid)
            const userDocSnap = await getDoc(userDocRef)
            if(userDocSnap.exists()){
                const userData = userDocSnap.data();

                localStorage.setItem('userUid', user.uid);
                localStorage.setItem('username', userData.username || "")
                localStorage.setItem('nickname', userData.nickname || "")
                localStorage.setItem('token', await user.getIdToken())

                window.dispatchEvent(new Event("userChanged"))
                message.value = "登入成功"
                setTimeout(() => router.push('/Member'), 1000)
            }
        }catch(err){
            console.error("登入失敗:", err)
            notify("登入失敗，請確認帳號密碼是否正確")
        }
    }

    const toastRef = ref('')
    const notify = (msg) => {
        toastRef.value.showToast(msg)
    }

</script>

<template>
    <div class="head"></div>
    <div class="container">
        <form @submit.prevent="login">
            <h1>會員登入</h1>
            <div class="input-box">
                <input v-model="email" type="text" name="email" placeholder="登入信箱" required>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="input-box">
                <input v-model="password" type="password" name="password" placeholder="輸入密碼" required>
                <i class="fa-solid fa-lock"></i>
            </div>
            <button class="login-btn" @click="login">登入</button>
            <p>{{ message }}</p>
            <div class="register-link">
                <p>還沒註冊嗎? <router-link to="/Register">註冊</router-link></p>
            </div>
        </form>
    </div>
    <Toast  ref="toastRef"/>
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

.container .login-btn {
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

.login-btn:hover {
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