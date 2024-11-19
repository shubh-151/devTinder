- create a repository
- Initialize the repository
- node_modules, package.json, package.json
- Install express
- Create a server
- Listen the port 7777
- Write request handelers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Diffrence between caret and tilde (^ vs ~)

- Initialize git
- .gitignore 
- Create a remote repo on github 
- Push all code on remote origin
- Play with routes and route extensitions ex. /hello, /hello/2, /xyz
- Order of the routes matter a lot 
- Install Postman app and make a workspace/collection>test API call
- Write logic to handle GET, PATCH, DELETE API Calls and then on postman
- Explore routing and use of ?, +, (), * in routes 
- Use of regex in routes /a/, ./.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers - PLAY WITH THE code
- next()
- Next function and errors along with res.send()
- app.use("/route", rh,rh2,[rh3,rh4,rh5])
- What is middleware
- How express js basically handles request behind the scenes
- Diffrence between app.use vs app.all
- write a dummy auth middleware for admin
- write a dummy auth middlewares for all user routes, except /user/login
- erroe handling using app.use("/" (err,req,res,next)={});

- create a free cluster on MongoDB official
- Install mongoose library
- Connect your application to the database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- create a userSchema 


























// order matter for all the routes in nodejs 
app.use("/users",(req,res)=>{
    res.send("HAHAHAHAHAHAHAHA")
});


// this will only handle Get call to /user
app.get("/users",(req,res)=>{
    res.send({firstName:"Shubham", lastName:"Shukla"})
});

// this will only handle Get call to /user
app.post("/users",(req,res)=>{
    res.send("Data saved in database")
});

app.delete("/users",(req,res)=>{
    res.send("Data delete from database")
});



// this route will work for all http request get and post etc
app.use("/test",(req,res)=> {
    res.send("hello form the  test route");
})

