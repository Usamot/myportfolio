import React from 'react'
import "./education.css"
import { useState } from 'react'

const Education = () => {
    const [open, setOpen] = useState(false)
    const toggle = ()=>{
        setOpen(!open)
        console.log(open)
        if (open1 ||open2 || open3  === true){
            setOpen1(false );
            setOpen2(false);
            setOpen3(false);
        }
            // console.log(open)
            console.log(open1)
            console.log(open2)
            console.log(open3)


    }
    
    const [open1, setOpen1] =useState(false)
        const toggle1 = ()=>{
            setOpen1(!open1)
            if (open ||open2 || open3  === true){
                setOpen(false );
                setOpen2(false);
                setOpen3(false);
            }
            console.log(open1)
    }

    const [open2, setOpen2] = useState(false)
       const toggle2 = ()=>{
        setOpen2(!open2)
        if (open ||open1 || open3  === true){
            setOpen(false );
            setOpen1(false);
            setOpen3(false);
        }
        console.log(open2)
    }
    
  const [open3, setOpen3]=useState(false)
  const toggle3 = ()=>{
      setOpen3(!open3)
      if (open ||open1 || open2  === true){
        setOpen(false );
        setOpen1(false);
        setOpen2(false);
      }
      console.log(open3)
  }
 
    
  return (
    <div className="education">
        <h4>Education</h4>

        <div className='edu-ul'>

            <div className="edu " >

            <div className="edu-h --card" onClick={toggle}>
                <p>Bsc Certificate</p>
                { open? <p>X</p> : <p>+</p>}
            </div>
            {
            open?

<div className="edu-f">
<p> Netflix is a streaming khvkkjghjhbg
    hjbghjhvhjbgjhvg
    jkhjkhj vvvvgb.</p>
</div>

            : ''

            }
            </div>

            <div className="edu " >

<div className="edu-h --card" onClick={toggle1}>
    <p>National Diploma</p>
    { open? <p>X</p> : <p>+</p>}
</div>
{
open1?

<div className="edu-f">
<p> Netflix is a streaming khvkkjghjhbg
hjbghjhvhjbgjhvg
jkhjkhj vvvvgb.</p>
</div>

: ''

}
</div>
<div className=" edu" >

<div className="edu-h --card" onClick={toggle2}>
    <p>A'Level Program</p>
    { open? <p>X</p> : <p>+</p>}
</div>
{
open2?

<div className="edu-f">
<p> Netflix is a streaming khvkkjghjhbg
hjbghjhvhjbgjhvg
jkhjkhj vvvvgb.</p>
</div>

: ''

}
</div>
<div className=" edu" >

<div className="edu-h --card" onClick={toggle3}>
    <p>O'Level Program</p>
    { open? <p>X</p> : <p>+</p>}
</div>
{
open3?

<div className="edu-f">
<p> Netflix is a streaming khvkkjghjhbg
hjbghjhvhjbgjhvg
jkhjkhj vvvvgb.</p>
</div>

: ''

}
</div>
            
           
           

        </div>
    </div>
  )
}

export default Education