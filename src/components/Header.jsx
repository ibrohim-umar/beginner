import { MenuOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Data } from './Data';
import './styles/Header.css';


const Header = () => {

   const [open, setOpen] = useState(false);


   const showMenu = () => {
      setOpen(!open)
   }

  return (
    <div className='header' >
        <nav>
            <div className='logo'> <h1> Emim . </h1> </div>
            <ul className='ul-items' >
                <li>
                   <Link className='link' to="/"> Home  </Link>
                </li>
                <li>
                   <Link className='link' to="/"> About  </Link>
                </li>
                <li>
                   <Link className='link' to="/"> Servise </Link>
                </li>
                <li>
                   <Link className='link' to="#"> Projects  </Link>
                </li>
                <li>
                   <Link className='link' to="#"> Blog  </Link>
                </li>
                <li>
                   <Link className='link' to="/contact"> Contacts </Link>
                </li>

                <div className="hamburger-menu">
                    <MenuOutlined className='menu-icon' onClick={showMenu} />
                </div>
            </ul>
        </nav>

        <nav className={open ? 'slider-active' : 'slider'}>
              <ul className='slider-ul' onClick={showMenu} >
                 {Data.map((item,index)  => {
                    return (
                       <li key={index} className={item.className} >
                           <Link to={item.path} > {item.text} </Link>
                       </li>
                    )
                 })}
              </ul>
        </nav>

    </div>
  )
}

export default Header