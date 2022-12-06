/// kani waxa uu inoo hayaa dhamman Image Drop-done


import user from '../../public/icons8_user_480px.png';
import edit from '../../public/icons8_edit_property_512px.png';
import inbox from '../../public/icons8_new_message_480px.png';
import settings from '../../public/icons8_settings_480px_1.png';
import help from '../../public/icons8_help_480px_1.png';
import logout from '../../public/icons8_Logout_480px_1.png';


///===> kani waa Fuctionka ka shaqaysiinaya Drop Down

import React, {useState, useEffect, useRef} from 'react';

function Navbar () {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">

      <div className="Navbar">
      <div className="logos">
            Macmiil Online
        </div>
        <nav className=''>
            <li>Home</li>
            <li>Product</li>
            <li>Product</li>
        </nav>
     
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
     

          <img src={user}></img>
        </div>
         
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >

          <h3>Macmiil<br/><span>User Info</span></h3>
          <ul>
            <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            <DropdownItem img = {inbox} text = {"Inbox"}/>
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>

      </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Navbar