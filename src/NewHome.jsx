import React from 'react'
import {PropsCard}  from './propsCard'
import a from './a.png'
import 'bootstrap/dist/css/bootstrap.css';

export const NewHome = () => {

let datas=[
    {
    heading:'first heading',
    body:'first',
    img:a,
    title: 'FINANCE',
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
},
{
    heading:'first heading',
    body:'first body',
    img:a,
    class:'bg-success'
}


]

  return (
    <>
    <div className='d-flex flex-wrap gap-4 justify-content-center m-auto' style={{width:'70%'}}>
    {datas.map((item)=>(
        <PropsCard heading={item.heading}
        title={item.title} body={item.body} img={item.img} class={item.class}/>
        
    ))};
    </div>
    </>
)}
