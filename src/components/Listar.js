// import components 
import React from 'react';
import Personaje from './Personaje';

//import styles
import '../styles/listar.css';

export default function Listar({items}) {
  return (
    <div className="div-listar">
        {items.map(item => 
          <Personaje name={item.name} image={item.image} key={item.id}/>
        )}
    </div>
  )
}
