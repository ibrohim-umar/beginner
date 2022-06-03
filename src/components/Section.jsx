import React from 'react';
import './styles/Section.css';
import qwe from './assets/qwe.jpg'


const Section = () => {
  return (
    <section className='main-section' >
        <div className="container">
            <div className="text">
                <h1 className='h1-s'>Hello My Names</h1>
                <h1 className="h1-big">Andrew Herkel </h1>
                <p>Professional Front-end  React js Developer with 5 years experiance </p>
                <button className='text-button' > My Work</button>
            </div>
            <div className="image">
                <img src={qwe} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Section