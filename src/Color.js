import React from 'react';

function Color({color}) {

  return (
    <div className="color" style={{background: color}}>
      <h1>color: {color}</h1>
    </div>
  )
}

export default Color;