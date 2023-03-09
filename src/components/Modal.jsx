import React from 'react'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
const MODAL_STYLES = {
  position: 'fixed',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '0px',
  width:'552px',
  zIndex: 1000,
  height: '',
  borderRadius:'10px'
}
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,.7)',
  zIndex:1000
}
const Modal = ({ open, children, onClose, onSave}) => {
    if (!open) return null
  return (
      <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 1.5rem", borderBottom:'1px solid rgba(0,0,0,0.7)'}}>
            <h3>Edit Your Photo</h3>
            <button style={{background:"none", border:"none", padding:"5px" , cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center", width:"35px", height:"35px", borderRadius:"50%", backgroundColor:"#e1dfdf", color:"#494949"}} onClick={onClose}>
              <ClearRoundedIcon />
            </button>
          </div>
          
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'4rem 0', border:''}}>
            {children}
          </div>

          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "1rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.8)"}}>
            <div style={{marginLeft:'auto'}}>
              <button style={{
                border: "none", padding: ".5rem 1.2rem", borderRadius: "1.6rem", border: '1px solid #1350ca', color:'#1350ca', backgroundColor:"white", fontWeight:'bold', cursor:'pointer'}}>Cancel</button>
            <button style={{
                border: "none", padding: ".5rem 1.2rem", borderRadius: "1.6rem", border: '1px solid #1350ca', color:'#1350ca', backgroundColor:"white", fontWeight:'bold', marginLeft:'10px', cursor:'pointer'}} onClick={onSave}>Save</button>
            </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default Modal