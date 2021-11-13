import { useState, useEffect } from "react";
import initializeFirebase from "../pages/Login/Firebase/FirebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

//initialize Firebase
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://fathomless-depths-15420.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const auth = getAuth();
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // saveUser

        setAuthError("");

        SaveUserInfo(email);
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const LoginUser = (email, password, location, history) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const destination = "/In";
        history.replace(destination);
        const user = userCredential.user;
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // Firebase Observer User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const SaveUserInfo = (email) => {
    fetch("https://fathomless-depths-15420.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return {
    user,
    authError,
    registerUser,
    isLoading,
    logOut,
    admin,
    LoginUser,
  };
};

export default useFirebase;
