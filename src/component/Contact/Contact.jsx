import React from 'react'
import { useRef } from 'react';
import './contact.css'
import {MdOutlineMarkEmailUnread} from "react-icons/md"
import {BsTelephone} from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7cz98ql', 'template_cg6n7ja', form.current, 'C4xaTcK_Q6x9fRfap')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 

  return (
    <div className="contact">

       
        <h1>Reach Out To Us</h1>
          <div className="contact-main">
          <div className="contact-left ">
         <div className="contact-content --card" >
           <p className='contact-item --card'><MdOutlineMarkEmailUnread size='50' /></p>
           <p>usamotabeebullahi.gmail.com</p>
         </div>
         <div className="contact-content --card">
           <p className='contact-item --card'   ><GoLocation size='50' /></p>
           <a>OYO-STATE</a>
         </div>
         <div className="contact-content --card" >
           <a className='contact-item --card'><BsTelephone size='50' /></a>
           <a>+2347067144826</a>
         </div>
       </div>


       <div className="contact-right">

         <form ref={form}  onSubmit={sendEmail} className="form">

           <input  type="text" name="name" id="client_name" placeholder='Name' required /><br />
           <input type="email" name="email" id="client_email" placeholder='Email' required /> <br />
          

          <textarea name="message" id="client_" cols="50" rows="7" placeholder='meassage' required ></textarea>
          <button type="submit" className='--btn --btn-primary'>Send</button>
         </form>
        
         
  

       </div>
          </div>
       



    </div>
  )
}

export default Contact