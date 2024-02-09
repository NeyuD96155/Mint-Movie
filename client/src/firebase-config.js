import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Import thêm dòng này

import { getAuth } from "firebase/auth"; // Thêm dòng này
const firebaseConfig = {
  apiKey: "AIzaSyCJFm0soRL14JJECIwInuH_DDtqMz-WuYM",
  authDomain: "mint-movie.firebaseapp.com",
  projectId: "mint-movie",
  storageBucket: "mint-movie.appspot.com",
  messagingSenderId: "541228151374",
  appId: "1:541228151374:web:24ffdadb6709337933891f",
  measurementId: "G-6K4M18D9DX"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app); // Khởi tạo auth
// Khởi tạo Firebase Analytics chỉ khi chạy trên trình duyệt và measurementId có sẵn
let analytics;
if (typeof window !== "undefined" && "measurementId" in firebaseConfig) {
  analytics = getAnalytics(app);
}

export { app, analytics, auth  };