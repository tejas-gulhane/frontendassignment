import React from 'react'
import './Live.css'
import photo1 from '../../Images/1stphoto.png'
import photo2 from '../../Images/2nd photo.png'
import photo3 from '../../Images/3stphoto.png'
import photo4 from '../../Images/4thphoto.png'
import photo5 from '../../Images/5thphoto.png'
import photo6 from '../../Images/6thphoto.png'
import { useEffect } from 'react'
import { useState } from 'react'

const Live = (props) => {
  const [page , setpage] = useState(1);
  const [delay , setdelay] = useState();
  const [leftphoto , setleftphoto] = useState(photo1);
  const [rightphoto , setrightphoto] = useState(photo2);
  const [selectphoto , setselectphoto] = useState();
  let [count , setcount] = useState(2);

  setTimeout(()=>{
    setdelay(true)
  },2500)

  // setInterval(() => {
  //   console.log("hi")
  // }, 2000);

  return (
    <>
    <div className='box4'>
        <p onClick={()=>{props.onselect()}}>LIFE AT PRIME LIFESPACE</p>
    </div>
    <div className='box5 appear'>
         We believe when everyone is moving forward together then success takes care of itself. <br/>
         Here is a glimpse of what’s it’s like to be a member of the Prime Lifespace Team. 
    </div>
    { delay && <div className='photobox'>
        <div className='bigimg'>
            <img src={leftphoto} alt="" />
        </div>
        <div className='smallimg'>
            <img src={rightphoto} alt="" />
        </div>
    </div>}
    </>
  )
}

export default Live