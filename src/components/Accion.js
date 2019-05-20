// import components
import React, { Component } from 'react';

// import styles 
import '../styles/accion.css';

export default class Accion extends Component {

  

  render() {
    return (
        <div className="div-action">
            <div className="div-text-action">
                <h3 className="text-action" > Enter the name of the character you want to search for </h3>
            </div>
            <div className="div-button-action">
                <input  className="input-action" id="formulario" type="text"/>
                <button className="button-action" id="boton" onClick={this.filtrar}> B u s c a r </button>
            </div>
        </div>
    )
  }
}
