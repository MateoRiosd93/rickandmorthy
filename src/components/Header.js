// import componets 
import React from 'react'

// import styles
import '../styles/header.css';

export default function Header({title, year }) {
  return (
    <div className="div-header">
        <img 
            className="img-api" 
            src="https://pbs.twimg.com/profile_images/997835995235176448/eHL-CqLL.jpg" 
            alt="Imagen Api - Rick and Morty"
        />
        <h1 className="title-header"> {title} - 
            <span className="year-header"> {year} </span>
        </h1>
        <div className="div-siguenos">
            <a className="siguenos icon-facebook-square" 
                href="https://www.facebook.com/mateo.riosdiaz">
            </a>
            <a className="siguenos icon-instagram"
                href="https://www.instagram.com/mateorios.jpg/">
            </a>
            <a className="siguenos icon-youtube-play" 
                href="https://www.youtube.com/channel/UCoje7QaPCDSMLaWy5wmcJ_w?view_as=subscriber">
            </a>
        </div>
    </div>
  )
}
