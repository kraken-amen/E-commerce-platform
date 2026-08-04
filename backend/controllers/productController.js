

const addProduct =async (req,res)=>{
    try{
        const {name,price,description,category,subCategory,sizes,bestSeller}=req.body;
        const img1=req.files.img1[0];
        const img2=req.files.img2[0];
        const img3=req.files.img3[0];
        const img4=req.files.img4[0];
        console.log(name,price,description,category,subCategory,sizes,bestSeller)
        console.log(img1,img2,img3,img4)
        res.json({})

    }
    catch{
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const getProduct =async (req,res)=>{
    
}

const singProduct =async (req,res)=>{
    
}


const deleteProduct =async (req,res)=>{
    
}

export{addProduct,getProduct,singProduct,deleteProduct};