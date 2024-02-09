import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config';

function App() {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Người dùng đã đăng nhập", user);
            } else {
                console.log("Người dùng đã đăng xuất");
            }
        });
    }, []);

    return (
        <div>
            {/* Các component của bạn ở đây */}
        </div>
    );
}
