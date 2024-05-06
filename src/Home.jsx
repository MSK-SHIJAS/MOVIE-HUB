import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from './Cards';
import watch from './watch.jpg'
import ben from './ben.jpg'
import notes from './pencil.png'
import Navabar from './Navigation';
import Cards2 from './Cards2';
import dp1 from './dp1.jpeg';
import dp2 from './dp2.jpg';
import dp3 from './dp3.jpg';
import Footers from './Footer';

export const Home = () => {
    let data=[{
        img: watch,
        imgclass:'h-50 rounded-0',
        title: 'FINANCE',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'There a lot of exciting stuff going on in the stars above us thue wake actronny s much fun',
        shares:'275',
        views:'275',
        messages:'12',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 w-75 mb-3',
        contents:'w-75 text-secondary',
        cards:'ms-sm-4 mx-sm-0 mx-4'
    },
    {
        title: 'FINANCE',
        subtitle:'LAS VEGAS HOW TO HAVE NON GAMBLING RELATED FUN',
        text:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving',
        shares:'275',
        views:'275',
        messages:'12',
        cards:'bg-danger text-light mx-4',
        headings:'fs-6 mb-5',
        subheading:'fs-5 mb-3',
        notesicon:notes,
        icon:' h-25 w-25 mb-5',
        footer:'border-light'

    },
    {
        img:ben,
        imgclass:'h-50 rounded-0',
        title: 'VIDEO',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'There a lot of exciting stuff going on in the stars above us thue wake actronny s much fun',
        shares:'275',
        views:'275',
        messages:'12',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 mb-3',
        contents:'text-secondary w-75',
        cards:'me-sm-4 mx-sm-0 mx-4'
    }]

    let data0=[{
        // img:watch,
        // imgclass:'h-25 object-fit-cover rounded-0',
        subtitle:'Search Engine Optimization And Advertising',
        text:'There is a lot of soxciting stuff guing or in the stars shove as that make astronomy so much fun',
        cards:'ms-sm-4 mx-sm-0 mx-4 text-center',
        contents:'text-secondary',
        subheading:'fs-5 mb-3',
    },
    {
        title: 'LEADERSHIP',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'There a lot of exciting stuff going on in the stars above us thue wake actronny s much fun',
        shares:'275',
        views:'275',
        messages:'12',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 w-75 mb-3',
        contents:'w-75 text-secondary',
        cards:'mx-4'
    },
    {
        title: 'LEADERSHIP',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'There a lot of exciting stuff going on in the stars above us thue wake actronny s much fun',
        shares:'275',
        views:'275',
        messages:'12',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 w-75 mb-3',
        contents:'w-75 text-secondary',
        cards:'me-sm-4 mx-sm-0 mx-4'
    }]


    let data1=[{
        img:dp1,
        title: 'FINANCE',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'May 15, 2018',
        imgclass:'',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 mb-3',
        contents:' text-secondary',
        name:'KINGA CICHEWICZ',
        cards:'border-0'
    },
    {
        img:dp2,
        title: 'FINANCE',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'May 15, 2018',
        imgclass:'',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 mb-3',
        contents:' text-secondary',
        name:'KINGA CICHEWICZ',
        cards:' border-start'
    },
    {
        img:dp3,
        title: 'FINANCE',
        subtitle:'Unmatched Toner Cartridge Quality 20 Less Than Oem Price',
        text:'May 15, 2018',
        imgclass:'',
        headings:'text-danger fs-6 mb-3',
        subheading:'fs-5 mb-3',
        contents:' text-secondary',
        name:'KINGA CICHEWICZ',
        cards:'border-0'
    }]
  return (
    <div>
    
        <CardGroup className='mt-4'>
        {data.map((item)=>(
            <Cards img={item.img} title={item.title} subtitle={item.subtitle} text={item.text} 
            shares={item.shares} views={item.views} messages={item.messages} cards={item.cards}
            headings={item.headings} subheadings={item.subheading} contents={item.contents} imgclass={item.imgclass}
            notesicon={item.notesicon} icons={item.icon} footer={item.footer}
            />
        ))}
        </CardGroup>
           
        <CardGroup className='shadow-lg m-4'>
        {data1.map((item)=>(
                <Cards2 img={item.img} title={item.title} subtitle={item.subtitle} text={item.text} 
                cards={item.cards} headings={item.headings} subheadings={item.subheading} contents={item.contents} imgclass={item.imgclass}
                name={item.name} 
                 />
            ))}
        </CardGroup>

        <CardGroup className='mb-5'>
        {data0.map((item,index)=>(
            <Cards key={index} index={index} img={item.img} title={item.title} subtitle={item.subtitle} text={item.text} 
            shares={item.shares} views={item.views} messages={item.messages} cards={item.cards}
            headings={item.headings} subheadings={item.subheading} contents={item.contents} imgclass={item.imgclass}
            notesicon={item.notesicon} icons={item.icon} footer={item.footer}
            />
        ))}
        </CardGroup>
        <Footers/>
    </div>
  )
}