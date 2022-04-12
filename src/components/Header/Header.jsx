import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component{
    constructor(props){
        super(props)

    }

    render(){
    
          return(
            <div className='headerBox'>
                <h1>Super Trunfo Paises</h1>
                <p>Desenvolvido por Leandro Carvalho</p>
                <ul>
                <li>
                    <button className='btn btn-outline-secondary btn-sm' onClick={(x) => this.props.comoJogar(true)}>Como Jogar</button>
               </li>
                <li>
                    <button className='btn btn-outline-secondary btn-sm' onClick={(x) => this.props.mostrarFontes(true)}>
                        Fontes
                    </button>
                </li>
                </ul>
               
                 

            </div>
        )
    
    }
}

export default Header;