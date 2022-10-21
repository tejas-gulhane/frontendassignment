import React from 'react'
import './Landingpage.css'
import Cover  from '../../Images/Cover.png'
import Logo  from '../../Images/Logo.png'

const Landingpage = (props) => {
 
  return (
    <>
        <div className='navbar'>
            <h6>EXPERTISE</h6>
            <h5>PROJECTS</h5>
            <img src={Logo} alt="" onClick={()=>{props.onselect()}}/>
            <h4>INVEST</h4>
            <h3>HOUSING</h3>
            <button>ENQUIRE</button>
            <i className="fa-solid fa-bars"></i>
        </div>
        <div className='section'>
            <div>
            <img src={Cover} alt="" className='zoomout'/>
            </div>
            <div className='rightsection'>
                <h4 className='downside'>JOIN OUR TRIBE</h4>
                <p className='upside5'>Let’s join our efforts towards building the unshakable foundation for a better tomorrow.</p>
            </div>
        </div>
    </>
  )
}

export default Landingpage