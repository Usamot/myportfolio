import React from 'react'
import './about.css'
import {GrHtml5} from "react-icons/gr"
import {BsFiletypeCss} from "react-icons/bs"
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FaMicrosoft} from 'react-icons/fa'
import{AiOutlineNodeCollapse} from 'react-icons/ai'
import {BsGit} from 'react-icons/bs'
import {BsCloudArrowDownFill} from 'react-icons/bs'
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
const About = () => {
  return (
    <div className='about'>
      <small>About us</small>

   
      
    <div>
    <h1><b>WHO AM I ?</b></h1>
        
    </div>
       <small> 
         </small>

        

         <div className="about-ul">
           
           <ul className="--card ">
             <li className="l2" > <GrHtml5 size={60}/></li>
             <li className="l1"> HTML</li>
             <hr />
           </ul>
           <ul className="--card">
             <li className="l2" ><BsFiletypeCss size={60}/></li>
             <li className="l2" >CSS</li>
             <hr />
           </ul>
           <ul className="--card">
             <li className='l1' ><IoLogoJavascript size={60}/></li>
             <li className='l2' >JAVASCRIPT</li>
             <hr />
           </ul>
           <ul className="--card">
             <li className="l2"><FaReact size={60}/></li>
             <li className="l4">REACT</li>
             <li><hr /></li>
           </ul>
           <ul className="--card">
             <li className="l2" ><FaMicrosoft size={60}/></li>
             <li className="l2">MS PACKAGES</li>
             <li><hr /></li>
             </ul>
             <ul className="--card">
             <li className="l1" ><AiOutlineNodeCollapse size={60}/></li>
             <li className="l1">Node JS</li>
             <li><hr /></li>
             </ul>
             <ul className="--card">
             <li className='l5'><BsGit size={60}/></li>
             <li className="l5">GIT</li>
             <li><hr /></li>
             </ul>

             <ul className="--card">
             <li className="l1" ><FaPython size={60}/></li>
             <li className="l1">PYTHON</li>
             <li><hr /></li>
             </ul>

             <ul className="--card">
             <li className="l5" ><DiDjango  size={60}/></li>
             <li className="l1">DJANGO</li>
             <li><hr /></li>
             </ul>
        
             
         </div>
         <div className='about-footer'>
           <h4> <em> Am happy to to tell you that many projects are available !!!</em></h4>
         
           < BsCloudArrowDownFill size={50}/>
         </div>

        

    </div>
  )
}

export default About
