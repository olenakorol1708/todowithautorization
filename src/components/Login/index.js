import React from 'react'

   const Login = () => {
   
   
 async function loginFetch(){
  try{
    const result = await fetch("https://first-node-js-app-r.herokuapp.com/api/auth/login",{
method:"POST",
headers:{
   
     'Content-Type': 'application/json' 
},
body: JSON.stringify({
    
        "email": "olena1708@gmail.com",
        "password": "17Aug2023!!"
      })

})
const data = await result.json();
console.log(data)
// localStorage.setItem('access',data.access);
// localStorage.setItem('refresh',data.refresh)
// console.log(localStorage);
  }
  catch(erorr){
    console.log(erorr.message)
  }

 
    }
loginFetch()

  return (
  <form className='login-form'>
    <h3>Login</h3>
    <input type = "password"/>
   
    <input type = "email"/>
    <button>Submit</button>
  </form>
  )
}
export default Login