import { getDatabase, ref, onValue, set, get, child } from "firebase/database"

import { query, orderBy, limit, where, collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore"

import { fireStore } from "./firebase"

export const createUser = async (user) => {
    await setDoc(
        doc(fireStore, "users", user.uid),
        {
            name: user.displayName,
            email: user.email,
        },
        { merge: true }
    )
}

export const updateUser = async (user, data) => {
    await setDoc(doc(fireStore, "users", user.uid), data, { merge: true })
    return true
}

export const getNotifications = async (user) => {
    let d = []
    const schRef = collection(fireStore, "notifications")
    const q = query(
        schRef,
        where("uid", "==", user.uid),
        orderBy("date")
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        d.push(doc.data())
    })

    return d
}

export const getUsers = async (user) => {
    let d = []
    const querySnapshot = await getDocs(collection(fireStore, "users"))
    querySnapshot.forEach((doc) => {
        d.push(doc.data())
    })
    return d
}

export const getChapter = async (id) => {
    let d = []
    let name = null

    const docRef = doc(fireStore, `quran/${id}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        let myUser = docSnap.data()
        if (myUser.name != undefined) {
            name = myUser.name
        }

        const querySnapshot = await getDocs(
            collection(fireStore, `quran/${id}/ayah`)
        )

        querySnapshot.forEach((doc) => {
            d.push(doc.data())
        })
    }

    return {
        name: name,
        ayah: d,
    }
}

export const checkNickName = async (user) => {
    console.log("user-user:", user)
    console.log(user.uid)

    const docRef = doc(fireStore, "users", user.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        let myUser = docSnap.data()
        if (myUser.nickName != undefined) {
            return true
        }
        return false
    } else {
        // doc.data() will be undefined in this case
        return false
        console.log("No such document!")
    }
}

export const getUser = async (uid) => {
    const docRef = doc(fireStore, "users", uid)
    const docSnap = await getDoc(docRef)

    let myUser = docSnap.data()
    return myUser
}
