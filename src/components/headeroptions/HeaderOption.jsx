import { Avatar, Badge } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { selectUser } from '../../features/user/userSlice';
import './HeaderOption.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const HeaderOption = ({avatar, Icon, title, onClick, quantity }) => {
  const user = useSelector(selectUser);
  const [toogle, setToggle] = useState(false);
 
  return (
      <div className="headeroption" onClick={onClick}>
      {Icon &&
        <Badge color='secondary'
          badgeContent={quantity}>
        
          <Icon classname="headeroption__icon" />        </Badge>}

      {avatar && <Avatar className='headeroption__icon' style={{backgroundColor:"green", color:"whitesmoke"}}>
        {user?.email[0]}
      </Avatar>}
      <h3 className='headeroption__title'>{title}  {avatar &&
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
</svg>}</h3>
  
      </div>
  )
}

export default HeaderOption