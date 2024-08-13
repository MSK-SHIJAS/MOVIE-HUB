import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Login.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Form from './Form';
// import Counter from './Counter';
// import Net from './Net';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewHome } from './NewHome';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Movies from './Movies';
import Detail from './Detail';
// import { Home } from './Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//   <BrowserRouter>
//     <Routes>
//       {/* <Route path="/home" element={<Home/>} /> */}
//       <Route path="/" element={<Form1/>} />
//       {/* <Route path="/about" element={<About/>} /> */}
//       <Route path="/edit" element={<Edit/>} />
// <Route path="/view" element={<View/>} />
//     </Routes>
//   </BrowserRouter>

// card ------------------------------------------------------------------


  //  <React.StrictMode>
  // <NewHome/>
  //  </React.StrictMode>


// useeffect ------------------------------------------------------------------

//    <React.StrictMode>
// <BrowserRouter>
// <Routes>
//    <Route path="/" element={<Effect/>} />
//    <Route path="/Link" element={<FetchData/>} />
//    </Routes>
//    </BrowserRouter>
//    </React.StrictMode>


//movies.......................................................................................

 <React.StrictMode>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Movies/>}></Route>
 {/* <Route path='/next' element={<Home/>}></Route> */}
   {/* <Route path='/fetchdata' element={<FetchData/>}></Route>  */}
//  <Route path='/movies' element={<Movies/>}></Route>
//  <Route path='/detail/:id' element={<Detail/>}></Route>
// </Routes>
 </BrowserRouter>
 </React.StrictMode> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
