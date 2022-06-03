import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact' >
       <div className='arrow-home' >
           <Link to='/' > <ArrowBack className='arrow' /> </Link>
       </div>
       <form>
           <label>Your Name</label>
           <input type='text' placeholder='Enter your Name'></input>
           <label>Your Name</label>
           <input type='text' placeholder='Enter your Name'></input>
           <label>Your Name</label>
           <input type='text' placeholder='Enter your Name'></input>
           <label>Message</label>
           <textarea   cols='50' rows='7' placeholder='write !' />

           <button>  SAND</button>
       </form>

    </div>
  )
}

export default Contact