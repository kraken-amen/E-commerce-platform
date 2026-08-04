import multer from "multer";
const storage =multer.diskStorage(
    {
        filename:function(req,res,callback)
        {
            callback(null,filename.orginalname)
        }
    }
)
const upload =multer({storage})
export default upload
