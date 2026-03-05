import React from 'react'
import './header-component.css'
import con2 from '../assets/con2.png'

const HeaderComponent = () => {




  return (
    <div className="header-component" >
        

        <img src={con2} alt="" srcset="" />

        <div className="header-component-top">

            <div className='card'>

            <h1 className="top-1">Hi Welcome Here </h1>
            <h3>I am a Fullstack Developer</h3>

            </div>

            
            <button type="submit">EMPLOY ME</button>
        </div>

        


        
    
    </div>
  )
}

export default HeaderComponent