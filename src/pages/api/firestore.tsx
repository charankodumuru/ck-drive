import {storage,app,database} from "@/firebaseConfig"
import { NextApiRequest, NextApiResponse } from "next";


const firestore = (req: NextApiRequest,resp: NextApiResponse) => {
    console.log(req.name);
    resp.status(200).json({text:"hello ck gdrive "});

};

export default firestore;