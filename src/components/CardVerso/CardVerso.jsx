import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import flag from "../../assets/imagens/flag.svg"


class CardVerso extends Component{
    render(){
        
        return(
            <ul className='testeCard'>
            <li className='liImg'>
           <img className="imgBandVerso" src={flag} alt='país indefinido'></img>
           </li>
           <li className='nomeDoPais'>País</li>
            <li className='categoriaDado'>
                <label className='nomeDoDado'>IDH</label>
                <button  className ='btn btn-secondary btn-block'>----</button>
            </li>
            <li className="categoriaDado">
                <label className='nomeDoDado'>Expectativa de vida</label>
                <button  className ='btn btn-secondary btn-block'>----</button>
            </li>
            <li className="categoriaDado">
                <label className='nomeDoDado'>População</label>
                <button  className ='btn btn-secondary btn-block'>----</button>
            </li>
            <li className="categoriaDado">
                <label className='nomeDoDado'>Área</label>
                <button  className ='btn btn-secondary btn-block'>----</button>
            </li>         
            </ul>
        )
    }
}

export default CardVerso;