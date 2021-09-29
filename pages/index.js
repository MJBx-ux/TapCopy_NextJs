import { auth } from "../components/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Login from "../components/login";
import Dahsboard from "../components/Dahsboard";

export default function Home() {
  const [islogin, setislogin] = useState(false);
  const [User, setUser] = useState({});
  const authCheck = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setislogin(true);
        console.log(user.displayName);
      } else {
        setislogin(false);
        setUser("");
      }
    });
  };

  useEffect(() => {
    try {
      authCheck();
    } catch (error) {
      console.log(error.message);
    }
  }, [islogin]);
  return islogin ? (
    <Dahsboard name={User.displayName} uid={User.uid}></Dahsboard>
  ) : (
    <Login></Login>
  );
}
