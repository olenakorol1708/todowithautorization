import React from 'react'
// import { uuid } from 'uuidv4';
   const Login = () => {
   const [passwordData,setPasswordData] = React.useState([{password:null}]);
   const [emailData,setEmailData] = React.useState([{email:null}]);


   const data =
    {   
      "password": "password",
   "email":"email"}
 async function loginFetch(){
  try{
    const result = await fetch("https://first-node-js-app-r.herokuapp.com/api/auth/login",{
method:"POST",
headers:{
   
     'Content-Type': 'application/json' 
},
body: JSON.stringify(data)
})
const data = await result.json();
console.log(data)
// localStorage.setItem('access',data.access);
// localStorage.setItem('refresh',data.refresh)
// console.log(localStorage);
// "olena1708@gmail.com"   17Aug2023!!
  }
  catch(erorr){
    console.log(erorr.message)
  }

 
    }
loginFetch()

  return (
  <form className='login-form'>
    <h3>Login</h3>
    <label for = "password">password <input type = "password" onChange={(e)=>setPasswordData(e.target.value)} value = {passwordData}/></label>
    <label for = "email">email<input type = "email" onChange={(e)=>setEmailData(e.target.value)} value = {emailData}/></label>
    <button>Submit</button>
  </form>
  )
}
export default Login