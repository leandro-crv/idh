import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import flag from "../../assets/imagens/flag.svg";

class CardMesa extends Component{
    render(){
        return(

    <section className='cardMesa'>
        <img src={flag}></img>
    </section>
        )
    }


}

export default CardMesa;