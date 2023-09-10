import React, {ChangeEvent, useState} from "react";
import { useFetchSession } from "@/hooks/useSession";
import Button from "../common/Button/Button";
import { signIn, signOut } from "next-auth/react"
import styles from "./Upload.module.scss"
import {fileUpload} from "@/API/FileUpload";
import CommonProgress from "../progress";



export default function UploadComponent(){
    const [progress,setProgress] = useState(0);
    const [isFileVisible, setFileVisible] = useState(false);  
    const [file,setFile] = useState({});
    const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.files?.[0]);
        //let {files} = event.currentTarget.files?.[0];
        const files = event.currentTarget.files; // Access the selected files
        if (files && files.length > 0) {
          const firstFile = files[0]; // Access the first file if it exists
          console.log(firstFile);          
          fileUpload(firstFile,setProgress);
        }
    };

    return(
        <div className = {styles.uploadMain}>                        
            <Button onClick={() => setFileVisible(!isFileVisible) } title="Add file" btnClass = "btn-success" >  </Button>
            {isFileVisible ? <input onChange = {(event) => uploadFile(event)} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" /> : <></>}
            <Button title="Create a folder" btnClass = "btn-primary btn-success" > </Button>
            {progress === 0 || progress === 100 ?  <></> : <CommonProgress progress = {progress}></CommonProgress>  }              
        </div>
    );
};