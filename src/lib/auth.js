import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import translateMessage from "../utils/translateMessage";
import { message } from "antd";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("use Auth must be");
  }
  return context;
};

function useAuthProvider() {
  const [user, setUser] = useState(null);
  const handleUser = (user) => {
    if (user) {
      //si tengosesion activa
      setUser(user);

      return user;
    } else {
      //no tengo sesion activa
      setUser(false);
      return false;
    }
  };
  async function register(data) {
    try {
      const userData = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log(user);
      const snapshot = await storage
        .ref(`users/${userData.user.uid}`)
        .put(data.image);
      console.log(snapshot);

      const imageURL = await snapshot.ref.getDownloadURL();
      console.log("image", imageURL);

      const { UserNames, UserLastNames, UserDate, email } = data;
      await db.ref(`users/${userData.user.uid}`).set({
        UserNames,
        UserLastNames,
        imageURL,
        UserDate,
        email,
      });

      message.success("registro exitoso");
      handleUser(user);
    } catch (error) {
      const errorCode = error.code;

      message.error(translateMessage(errorCode));
      handleUser(false);
    }
  }

  async function login(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        handleUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        message.error(translateMessage(errorCode));
        handleUser(false);
      });
  }

  async function logout() {
    try {
      await auth.signOut();
      handleUser(false);
    } catch (error) {}
  }

  useEffect(() => {
    const init = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("sesion activa", user);
          handleUser(user);
          // history.replace(Routes.ACTIVITIES);
        } else {
          // User is signed out
          console.log("sesion inactiva", user);
          handleUser(false);
        }
      });
    };
    init();
  }, []);

  return {
    user,
    register,
    login,
    logout,
  };
}
