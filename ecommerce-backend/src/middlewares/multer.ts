import multer from "multer";
import path from "path"
import {v4 as uuid} from  "uuid"
const storage = multer.diskStorage({


    destination(req,file,callback){
        callback(null,"uploads")
    },
    filename(req,file,cb){
        const id = uuid();
        const ext = file.originalname.split(".").pop();
        // path.extname();
    
        cb(null, `${id}.${ext}`)
    }
})

export const upload = multer({storage}).single("photo");