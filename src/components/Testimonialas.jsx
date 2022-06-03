import React from 'react';
import kichik from  './assets/kichik.jpg';
import './styles/Testimonialas.css'


const Testimonialas = () => {
  return (
   <section className='testi'>
         
        <h1>Testimonialas</h1>

        <div className="cart-container">
            <div className="cart">
                <img src={kichik} alt="" />
                <h2> Osiyo </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, aliquid amet tempora est nemo unde possimus voluptatibus magni delectus necessitatibus fuga ducimus. Possimus suscipit nobis unde quasi consectetur. Quidem, fugiat.</p>

            </div>
            <div className="cart">
                <img src={kichik} alt="" />
                <h2> Osiyo </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, aliquid amet tempora est nemo unde possimus voluptatibus magni delectus necessitatibus fuga ducimus. Possimus suscipit nobis unde quasi consectetur. Quidem, fugiat.</p>

            </div>
            <div className="cart">
                <img src={kichik} alt="" />
                <h2> Osiyo </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, aliquid amet tempora est nemo unde possimus voluptatibus magni delectus necessitatibus fuga ducimus. Possimus suscipit nobis unde quasi consectetur. Quidem, fugiat.</p>

            </div>
        </div>

   </section>
  )
}

export default Testimonialas