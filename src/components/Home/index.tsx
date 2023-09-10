import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import Button from "../common/Button/Button";
import { signIn, signOut } from "next-auth/react"
import styles from "./Home.module.scss"
import TopbarComponent from "../Topbar";
import UploadComponent from "../Upload"


export default function HomeComponent(){

    return(
        <div>
        <TopbarComponent></TopbarComponent>        
        <UploadComponent></UploadComponent> 
        </div>

    )
}