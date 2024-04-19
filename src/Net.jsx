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
        <button className='btn btn-dark mt-5 ms-5' onClick={show}>WHAT IS NETFLIX?</button>
        {
            status && 
           "njsxij"
           }
        </div>
    
        )
}

export default Net