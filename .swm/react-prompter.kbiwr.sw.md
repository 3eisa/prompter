---
id: kbiwr
title: React Prompter
file_version: 1.1.1
app_version: 1.0.20
---

## Introduction

This doc describes the prompter system.

The application provides users who have been authenticated with the ability to create a personalized healthcare plan based on their answers to several questions.

We will follow its implementation across the various locations.

<br/>

<br/>

<br/>

Starting with the app.js. which is dived by ReactRouter. forcing unauthorized users to login.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
31             <Routes>
32               <Route path='/login' element={<LoginForm />}></Route>
33               <Route element={<ProtectedRoutes/>}>
34                 <Route path='/' element={<Writer />}></Route>
35               </Route>
36             </Routes>
```

<br/>

<br/>

<br/>

The ProtectedRoutes component will redirect the user back to login if they are not logged in. otherwise it will show whichever routes are nested within it..
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/pages/ProtectedRoutes.js
```javascript
19         return isAuth ? <Outlet /> : <Navigate to="/login" />;
```

<br/>

Upon successful authentication, the user will be redirected to their home page. From here, the user can view, add, or delete plans for patients, which are displayed by patient name.

When creating a new plan, the user will need to answer a series of questions. The responses will be compiled into a prompt for the AI and sent for processing.

<br/>

<br/>

The AI generated plan is then awaited using an async function.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/Questions.js
```javascript
38             const fetchData = async ()=>{
39                 const result = await fetch(url) //fetch
40     
41                 result.json().then(json=>{ //parse json
42                     setPlan(json.join(' ')) //update value
43                 })
44             }
45             fetchData() //call
```

<br/>

The state update allows the value to be reflected in the text editor, where the user can customize the plan based on their individual needs. The user also has the option to export the plan as a PDF.

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBcHJvbXB0ZXIlM0ElM0EzZWlzYQ==/docs/kbiwr).
