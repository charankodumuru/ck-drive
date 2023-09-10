import {database} from "@/firebaseConfig";
import {collection, addDoc} from "firebase/firestore";

const files1 = collection(database, 'files');

export  const addFiles = (imageLink: string) => {
    try{
        void addDoc(files1, {
            imageLink: imageLink,
        });
    }
    catch(err) {
        console.log(err);
    }
};