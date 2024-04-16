
import {useState} from 'react';
import Sign from './Sign';
import './Login.css'
import Loginpage from './Loginpage';
function Login() {


  const [status,setStatus] = useState(false)
  const login = ()=>{
          setStatus(true)
  }
  const signup = ()=>{
    setStatus(false)
}
  return (
    <div> 
       <button onClick={login} >LOGIN</button>
       <button onClick={signup}>SIGNUP</button>

       {
        status ? <>
       <Loginpage/>
        </> :<>
        <Sign/>
        </>
       }


    </div>
  )
}

export default Login























// import React,{useState} from 'react';

// function Counter() {


//   const [count,setCount] = useState(1000)

//   const increment = ()=>{
//           setCount(count+1)
//   }
//   const decrement = ()=>{
//      if(count === 0){
//       setCount(0)
//      }else{

//        setCount(count-1)
//      }
//   }

//   const reset = ()=>{
//     setCount(0)
//   }
//   const double = ()=>
//   { 
//     setCount(count*2)
//   }

//   return (
//     <div> 


//        <p>Counter</p>
//        {count}

//        <button onClick={increment} >+</button>
//        <button onClick={decrement}>-</button>
//        <button onClick={reset}>Reset</button>
//        <button onClick={double}>DOUBLE</button>
//     </div>
//   )
// }

// export default Counter