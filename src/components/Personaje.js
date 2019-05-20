// import components 
import React from 'react';

// import styles
import '../styles/personaje.css';


export default function Personaje({name,image,key}) {
  return (
    <div className="div-personaje">
      <img className="img-personaje" src={image} alt=""/>
      <h3 className="name-personaje">{name}</h3>
    </div>
  )
}
