
const adminAuthorize = (req,res,next)=>{
    const token = "xyz";
    isAuthAdmin = token === "xyz"
    if(!isAuthAdmin){
        res.status(401).send("Authentication in not success")
    }else{
        console.log("Authunticated")
        res.send("Server is wokrking properly");
    }
}

module.exports={
    adminAuthorize,
}