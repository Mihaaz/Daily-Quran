import { getDatabase, ref, onValue, set, get, child } from "firebase/database";

import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

import { fireStore } from "./firebase";

export const createUser = async (user) => {
  await setDoc(
    doc(fireStore, "users", user.uid),
    {
      name: user.displayName,
      email: user.email,
    },
    { merge: true }
  );
};

export const getUsers = async (user) => {
  let d = [];
  const querySnapshot = await getDocs(collection(fireStore, "users"));
  querySnapshot.forEach((doc) => {
    d.push(doc.data());
  });
  return d;
};

export const checkNickName = async (user) => {
  const docRef = doc(fireStore, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let myUser = docSnap.data();
    if (myUser.nickName != undefined) {
      return true;
    }
    return false;
  } else {
    // doc.data() will be undefined in this case
    return false;
    console.log("No such document!");
  }
};
