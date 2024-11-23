
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

const adminAuth =  (req, res, next) => {
    console.log("Admin Auth is checked!!")
  const token = "xyz";
  const isAdminAuthorozed = token === "xyz";
  if (!isAdminAuthorozed) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
}

module.exports={
    adminAuth,
} 



