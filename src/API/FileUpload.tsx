import {storage} from '@/firebaseConfig';
import {ref,getDownloadURL, uploadBytesResumable} from "firebase/storage";
import {addFiles} from "@/API/Firestore";


export const fileUpload = (file: any, setProgress: Function) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on (
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            //console.log(progress);
            setProgress(progress);
        },
        (error) => {
            alert(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>  {                            
                addFiles(downloadURL);
            }).catch((err) => {console.log(err);});
        }
    );
};

