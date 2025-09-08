import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey:"AIzaSyDLRW4dlMq5DjxmrPQYEpwQRNVU0h-MGLU",
  authDomain:"miaolitravel-68959.firebaseapp.com",
  projectId:"miaolitravel-68959",
  storageBucket:"miaolitravel-68959.appspott.com",
  messagingSenderId:"50331358783",
  appId:"1:50331358783:web:269323a63b609e2b534a8a",
  measurementId:"G-HQ07YMDQTR"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 匯出 Authentication 和 Firestore 實例
export const auth = getAuth(app);
export const db = getFirestore(app);
