import React from 'react';
import { useState } from 'react';
// import { uuid } from 'uuidv4';
  
const Login = () => {
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');

const passwordHandler = (e)=>{
  setPassword(e.target.value)
    
    console.log(e.target.value)
  
}
const emailHandler = (e)=>{
  setEmail(e.target.value)
  console.log(e.target.value)

  }


 async function loginFetch(){
    
  try{
    let info = {   
      "password": password,
   "email":email}

    const result = await fetch("https://first-node-js-app-r.herokuapp.com/api/auth/login",{
method:"POST",
headers:{
   
     'Content-Type': 'application/json' 
},
body: JSON.stringify(info)
})
const data = await result.json();
console.log(data)

  }
  catch(erorr){
    console.log(erorr.message)
  }

 
    }
loginFetch()

  return (
  <form className='login-form'>
    <h3>Login</h3>
    <label >password <input type = "password" name = "password" onChange={passwordHandler} value = {password}/></label>
    <label>email<input type = "email" name = "email" onChange={emailHandler} value = {email}/></label>
    <button onClick = {()=>loginFetch()}>Submit</button>
  </form>
  )
}
export default Login;


// localStorage.setItem('access',data.access);
// localStorage.setItem('refresh',data.refresh)
// console.log(localStorage);
//email "olena1708@gmail.com" 
  //password 17Aug2023!!