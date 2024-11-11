<<<<<<< HEAD
const adminAuth =  (req, res, next) => {
    console.log("Admin Auth is checked!!")
  const token = "xyzsdfged";
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
=======

const adminAuthorize = (req,res,next)=>{
    
}
>>>>>>> edef5b1d60553bf86b58ba13398e2832ec2cf741
