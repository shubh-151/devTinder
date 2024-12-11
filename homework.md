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
- create a userSchema & user Model
- Create POST /signup API to add date to database
- Push some documents using API calls from postman
- Error handling using try, catch

- JS object vs JSON(diffrence)
- Add the express.json middleware to your app
- Make your signup API dynamic to recieve data from the end user
- User,findone with duplicate email ids, which object returned
- API Get user by email
- API - feed API - GET/feed - get all the users from the database
- API - GEt user by ID
- Create a delete user API
- Diffrence between PUT and PATCH
- Read about the update and optins(Before and after)
- API- Upoadte a user
- Explore the mongoose documentation for model methods
- What are the options in a model.findOneAndUpdate method, explore more about it
- API - Update the user with email ID



- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- Add default 
- Create a custom validate function for Gender
- Improve the db userSchema 
- Add timestamps to the userSchema
- Add API level validation on patch request & Signup post api
- Add API Validation for each field 
- Install validator 
- Explore validator library function and use validator Function for password, email and photURL
- Never trust req.body


- Validate the data in SignUP API
- Install bycrupt package
- Create PasswordHash using bcrypt.hash & save the user uis excrupted password
- Create login API and 
- Compare password and throw error if email and password in invalid

























