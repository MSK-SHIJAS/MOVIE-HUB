import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Effect = () => {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)

 

    useEffect(()=>{
        console.log('mounting phase');
    },[])

    useEffect(()=>{
        return ()=>{
            console.log('unmounting phase');
        }
    },[])

    useEffect(()=>{
        console.log('in update phase');
    },[count,count1])

    let increment=()=>{
        setCount(count+1)
    }
    let increment1=()=>{
        setCount1(count1+1)
    }

  return (
    <div>
<Link to='/Link'>

        <h2>
            link
        </h2>
</Link>
<button onClick={increment}>increment</button>
<button onClick={increment1}>increment another</button>
    </div>
  )
}

export default Effect