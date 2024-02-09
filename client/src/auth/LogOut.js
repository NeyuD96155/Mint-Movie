import { signOut } from "firebase/auth";
import { auth } from './firebase-config';

const logout = () => {
    signOut(auth).then(() => {
        // Đăng xuất thành công
    }).catch((error) => {
        // An error happened.
    });
};
