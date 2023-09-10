import React from "react";
import { useFetchSession } from "@/hooks/useSession";
import { signIn, signOut } from "next-auth/react"
import styles from "./Topbar.module.scss"
import Button from "../common/Button/Button";

export default function TopbarComponent(){    
    const {session} = useFetchSession();       
    return(
        <div className = {styles.authBtn}>
        {session ? 
        (<img onClick={() => signOut()} className = {styles.profileImg} src= {session?.user.image as string}/>)
         : 
         (<Button className="btn-primary" title="Sign up" onClick={() => signIn()}/>)
        }         
        </div>
    );
}