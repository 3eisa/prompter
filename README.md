Introduction

This doc describes the prompter system.

The application provides users who have been authenticated with the ability to create a personalized healthcare plan based on their answers to several questions.

We will follow its implementation across the various locations.

Starting with the app.js. which is dived by ReactRouter. forcing unauthorized users to login.
```
        <Routes>
          <Route path='/login' element={<LoginForm />}></Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<Writer />}></Route>
          </Route>
        </Routes>        
```

The ProtectedRoutes component will redirect the user back to login if they are not logged in. otherwise it will show whichever routes are nested within it..
```
return isAuth ? <Outlet /> : <Navigate to="/login" />
```

Upon successful authentication, the user will be redirected to their home page. From here, the user can view, add, or delete plans for patients, which are displayed by patient name.

When creating a new plan, the user will need to answer a series of questions. The responses will be compiled into a prompt for the AI and sent for processing.

The AI generated plan is then awaited using an async function.
```
const fetchData = async ()=>{
            const result = await fetch(url) //fetch
            result.json().then(json=>{ //parse json
                setPlan(json.join(' ')) //update value
            })
        }
        fetchData() //call
```

The state update allows the value to be reflected in the text editor, where the user can customize the plan based on their individual needs. The user also has the option to export the plan as a PDF.
