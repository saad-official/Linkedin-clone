import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import './Header.css';
import HeaderOption from '../headeroptions/HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logout, selectUser } from '../../features/user/userSlice';
import { Avatar, Badge } from '@material-ui/core';
const Header = () => {
  const dispatch = useDispatch();
  const [toogle, setToggle] = useState(false);
  const logoutOfApp = async () => {
  await  auth.signOut();
    dispatch(logout());
  }
  return (
      <div className='header'>
      <div className="header__left">
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt="Linkedin Logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>
      </div>



      <div className="header__right">
      
        <HeaderOption Icon={HomeIcon} title={'Home'} />
        <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'} quantity={"1"} />  


        <HeaderOption  Icon={BusinessCenterIcon} title="Jobs" quantity={"3"} />
        <HeaderOption Icon={ChatIcon} title="Messaging" quantity={"2"} />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" quantity={"9"} />
        <HeaderOption className="header__profile" avatar={true} title="Me" onClick={() => setToggle(!toogle)} />

        {
          toogle && 
          <div className='header__dropdown'>
              <div className="header__dropdown__menu">
                <div className="header__dropdown__menu1">
                  <Avatar  src='https://media.licdn.com/dms/image/C4D03AQGp1dS_77iEMA/profile-displayphoto-shrink_100_100/0/1611257099203?e=1679529600&v=beta&t=D8ZqeZShWr_pI8UdQvfHT5BjNKj0754bsFUyuOnf7ak'/>
                  <div className="header__dropdown__menu__inner">
                    <h3>name</h3>
                    <p>name@gmai.com</p>
                  </div>
                </div>
                </div>
                <div className="header__dropdown__menu2">
                 <button>View Your Profile</button>
                </div>

              <div className="header__dropdown__menu3">
                <h4>Account Setting</h4>
                <p>Language</p>
                <p>Setting and Privacy</p>
                <p>Help</p>
              </div>

              <div className="header__dropdown__menu3">
                <p onClick={logoutOfApp}>Logout</p>
              </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Header