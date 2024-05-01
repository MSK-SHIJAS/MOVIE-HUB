import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{

            let response=await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data);
            // response=await response.json()
            setPosts(response.data)
        }
        fetchData()
    },[])
  return (
    <div>
        {posts.map((item,index)=>(
            <div className='bg-black text-white'>
            <h2>Title: {item.title}</h2>
            <h2>Body: {item.body}</h2>
            {/* <img src={item.thumbnailUrl} alt="" />g */}
            </div>
        ))}
    </div>
  )
}

export default FetchData