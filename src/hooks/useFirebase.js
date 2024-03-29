import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initialiseAuthentication from "../firebase/firebase.init";
initialiseAuthentication();

const useFirebase =()=>{
    const [user,setUser]=useState({});
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
         
      }
      const logOut =()=>{
          signOut(auth)
          .then(()=>{
            setUser({})
          })
      }
    //   observing user auth change or not 
      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            } 
          });
      },[])
      return {
          user,
          signInUsingGoogle,
           logOut
          
      }
}
export default useFirebase;