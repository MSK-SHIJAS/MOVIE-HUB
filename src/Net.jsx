import {useState} from 'react';


function Net(){
    const[status,setStatus]=useState(false)
    const show = ()=>{
        if(status){
            setStatus(false)
        }else{
            setStatus(true)

        }
    }
    return(
    
    <div>
        <button onClick={show}>SHOW</button>
        {
            status && 
           "njsxij"
           }
        </div>
    
        )
}

export default Net