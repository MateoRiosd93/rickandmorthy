// import components
import React, { Component } from 'react';
import Header from './Header';
import Listar from './Listar';

// import style main.js
import '../styles/main.css';
import Accion from './Accion';

export default class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(date => {
                this.setState({
                    isLoaded: true,
                    items: date.results,
                })
            });
    };

  render() {
        const {items} = this.state;
        return (
            <div className="div-main">
                <Header title="Rick and Morty App" year={new Date().getFullYear()} />
                <Accion items={items}/>
                <Listar items={items}/>
            </div>
        )
    }
  }
