import React from 'react'
import './Widget.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widget = () => {
  const newArticle = (heading, subtitle) => (

    <div className="widgets__article">
      <div className="widgets__articleLeft">
      <FiberManualRecordIcon style={{color:"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}}/>
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    

  )
  return (
    <div className='widget'>
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      
      {newArticle("PAPA REACT is Back", "Top News - 9999 readers")}
      {newArticle("The Full Stack Junkie Is Back", "Top news - 9099 reader")}
      {newArticle("Coronavirus: UK updates", "Top news - 886 reader")}
      {newArticle("Bitcoin Breaks $22K", "Crypto - 8000 reader")}
      {newArticle("JavaScript Mastery", "Code - 120000 reader")}
      {newArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
    </div>
  )
}

export default Widget