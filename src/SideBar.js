import React from 'react'

export default function SideBar ({sbclose, sbtoggle}) {
  return sbtoggle ? (
    <div>
    <div style={{width:"200px",right:"0",position:"absolute",left:"0",top:"0",zIndex:"1",height:"100%",backgroundColor:"#fff",overflow:"auto"}} >
      <button style={{width:"100%"}} onClick={sbclose}>Close &times;</button>
      <a href="#" style={{width:"100%"}} className="w3-button">Link 1</a>
      <a href="#" style={{width:"100%"}} className="w3-button">Link 2</a>
      <a href="#" style={{width:"100%"}} className="w3-button">Link 3</a>
    </div>
    </div>
  ):
  (null);
}
