document.getElementById("download-pdf").addEventListener("click", async function () {
    // Trigger the form submission asynchronously
    const form = document.getElementById("fnoReport");
    if (!form) {
        alert("Form not found!");
        return;
    }

    form.submit();

    try {
        // Wait for the table data to load
        await waitForTableData();
        // Generate the PDF
        generatePDF();
    } catch (error) {
        console.error("Error waiting for table data:", error);
        alert("Failed to load table data. Please try again.");
    }
});

function waitForTableData() {
    return new Promise((resolve, reject) => {
        const reportTable = document.getElementById("fnoReport");
        if (!reportTable) {
            reject(new Error("Report table not found!"));
            return;
        }

        const tbody = reportTable.querySelector("tbody");
        if (!tbody) {
            reject(new Error("Table body not found!"));
            return;
        }

        const observer = new MutationObserver(() => {
            if (tbody.children.length > 0) {
                observer.disconnect(); // Stop observing
                resolve(); // Resolve the promise
            }
        });

        // Start observing the table's body for changes
        observer.observe(tbody, { childList: true });

        // Add a timeout to avoid waiting indefinitely
        setTimeout(() => {
            observer.disconnect(); // Stop observing on timeout
            reject(new Error("Table data did not load within the expected time."));
        }, 10000); // 10 seconds timeout
    });
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const table = document.getElementById("fnoReport");
    if (table) {
        doc.autoTable({ html: table });
        doc.save("FnoReport.pdf");
    } else {
        alert("Table not found!");
    }
}
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
- Explore validator library function and use validator Function for password, email and photoURL
- Never trust req.body


- Validate the data in SignUP API
- Install bycrupt package
- Create PasswordHash using bcrypt.hash & save the user uis excrupted password
- Create login API and. 
- Compare password and throw error if email and password in invalid.


- install cookie-parser
- just send a dummy cookie to user 
- create GET /profile API and check if you get the cookie back 
- install jsonwebtoken 
- In login API, after email and password validation, create a JWT token and send it to user
- read the cookie inside your profile API and Find the logged in user
- userAuth Middleware
- Add the userAuth middleware in profile API ans a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- create userSchema method to getJWT()
- create userSchema method to comparepassword(passwordInputByUser)



- Explore tinder APIs
- Create A list all API you can think of in dev Tinder
- Group multiple routes under repective routers 
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- create authRouter, profileRouter, requestRouter
- Import these rouetrs in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API=> Forgot password API
- Make you validated all data in every POST, PATCH APIS 
- Create connection request schema
- Send Connection Request API
- Proper validation of data
- Think about ALL corner cases
- $or query $and query in mongoose (https://www.mongodb.com/docs/manual/reference/operator/query-logical/)
- schema.pre ("save") function
- Read more about indexes in MondoDB
- Why do we need index in DB?
- What is the advantage and disadvantage of creating?
- Always think about corner cases

- write code with proper validation for POST /request/review/:status/:requestId
- Thought process -POST vs GET 

- Read about ref and populate
- create Get user/request/received with all the checks 
- create GET API  user/connections 


- logic for GET feed/ API
- Explore the $nin, $and, $ne and other query operators
- pagination 