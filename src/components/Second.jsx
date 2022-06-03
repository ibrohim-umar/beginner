import React from 'react';
import photo2 from './assets/photo2.jpg';
import './styles/Second.css'
const Second = () => {
  return (
   <section className='section-2' >
       <h1 className="about-me"> About Me </h1>

       <div className="container-2">
           <div className="image-cont">
               <img src={photo2} alt="" />
           </div>

        <div className="text-2">
            <p>Frontend Developer</p>
            <p>React js & Node js Developer </p>
            <p>UI & UX Designer </p>
            <p>MERN Stack Developer </p>
            <p>Worked for Google, Facebook, Amazon</p>
            <p>5 years of Developer Experiance</p>
            <p> Good Managment, Communication</p>
        </div> 

       </div>

   </section>
  )
}

export default Second