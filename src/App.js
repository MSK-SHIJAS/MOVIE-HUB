import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App(){

// const [profileName,setProfileName] = useState('Example')
//   const [profileAge,setProfileAge] = useState(30)

  // const [profile,setProfile] = useState({
  //   name:'eeample',
  //   age:20
  // })

  const [fruits,setFruits]= useState(['mango','orange','sdsd','sds','hi']);
  
  
    return(
      <div>      
{/* {profileName} */}
{/* {profileAge} */}

{/* { profile.name}
{profile.age} */}


 {/* {fruits[0]}
      {fruits[1]} */}

{/* 
      {profileName}
      {profileAge} 

      {profile.name}
      {profile.age}  */}
   { fruits.map((item)=>{
      return(
        <div>
          {item}
        </div>
      )
    })
  }
  </div>
);
}


export default App;