import {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    addDoc,
    collection
} from "../firebase"


//function for Sign-in
const logInWithEmailAndPassword = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

//function fro sign up
const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res?.user;
    if (user) {
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            email,
            scores: [
            ]
        });
    }
    return res;
};

//logout function
const logout = () => {
    signOut(auth);
};

export { logInWithEmailAndPassword, registerWithEmailAndPassword, logout }