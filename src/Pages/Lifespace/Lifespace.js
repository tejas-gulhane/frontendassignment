import React from 'react'
import './Lifespace.css'
import lifephoto1 from '../../Images/lifespacephoto1.png'
import lifephoto2 from '../../Images/lifespacephoto2.png'
import lifephoto3 from '../../Images/lifespacephoto3.png'
import lifephoto4 from '../../Images/lifespacephoto4.png'
import lifephoto5 from '../../Images/lifespacephoto5.png'
import { useState } from 'react';

const Lifespace = () => {

   const [photo,setphoto] = useState(lifephoto1);

    function changeclickhandler(){
      // let user = document.querySelector(".container")
      document.querySelector("#rightsec").classList.add("goup")
      document.querySelector(".header_lifespace").classList.add("goup")

      document.querySelector(".frame62").classList.add("goup1")
      document.querySelector(".frame63").classList.add("goup1")
      document.querySelector(".frame64").classList.add("goup1")
      document.querySelector(".frame65").classList.add("goup1")
      document.querySelector(".frame66").classList.add("goup1")
      document.querySelector(".group127").classList.add("goup1")
      document.querySelector(".group146").classList.add("goup1")
      document.querySelector(".group147").classList.add("goup1")
      document.querySelector(".group148").classList.add("goup1")
      document.querySelector(".group149").classList.add("goup1")
      document.querySelector(".photo3").classList.add("photo3_clicked")
      document.querySelector(".photo4").classList.add("photo4_clicked")

  
   }

  return (
    <>
       <div className='header_lifespace'>
             <p onClick={changeclickhandler}>BUILDING CHANGE</p> 
       </div>
       <div className='leftimgaes'>
            <img src={lifephoto1} alt=""  className='photo1'/>
             <img src={lifephoto2} alt="" className='photo2'/> 
             <img src={lifephoto3} alt="" className='photo3'/> 
            <img src={lifephoto4} alt="" className='photo4'/> 
            <img src={lifephoto5} alt="" className='photo5'/> 
       </div>
       <div className='rightsec_container'>
       <div className='rightsec' id='rightsec'>
         <p className='rightsec1'></p>
         <h1 className='rightsec2'></h1>
         <h2 className='rightsec3'></h2>
       </div>
       </div>

   
      
       <div className='frame62_container'>
         <div className='frame62 slideleft1'>
            <h6>P</h6>
         </div>
         <div className='group127 slideright1'>
            <span>PROBLEM  <br /> SOLVING SKILLS </span> 
            <p>We believe to nurture problem <br/> solvers, who lead better.</p>
         </div>
       </div>
       <div>
         <div className='frame63 slideleft2'>
            <h6>R</h6>
         </div>
         <div className='group146 slideright2'>
            <span>RELIABILITY</span> 
            <p>We believe transperancy is the first  <br/>step to any beginning.</p>
         </div>
       </div>
       <div>
         <div className='frame64 slideleft3'>
            <h6>I</h6>
         </div>
         <div className='group147 slideright3'>
            <span>INNOVATIVE <br /> THINKING</span> 
            <p>We encourage innovative ideas and <br/>improvising new things.</p>
         </div>
       </div>
       <div>
         <div className='frame65'>
            <h6>M</h6>
         </div>
         <div className='group148'>
            <span>MANAGEMENT  <br /> SKILLS</span> 
            <p>We thrive on good communication<br/> and motivation.</p>
         </div>
       </div>
       <div>
         <div className='frame66'>
            <h6>E</h6>
         </div>
         <div className='group149'>
            <span>ENGAGEMENT</span> 
            <p>Team work is the secret to <br/> achieve uncommon results.</p>
         </div>
       </div>
   
    </>
  )
}

export default Lifespace