
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


