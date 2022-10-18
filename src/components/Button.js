import React from "react";

function Button(props) {
  return  <div>
    <button type="button" className="counter-button" onClick={() => { props.onClick() }}>
      {props.name}
    </button> 
  </div>
}

export default Button 