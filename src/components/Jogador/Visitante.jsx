import React, { Component } from "react";
import Card from "../Card/Card";
import CardVerso from "../CardVerso/CardVerso";

class Visitante extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.carta == null) {
            return null
        }
        else if (!this.props.visivel) {
            return (
                <section className='jogador'>
          
                    <CardVerso  />
                </section>
            )
        }
        else {

            return (
                <section key={this.props.carta.id} className='jogador'>
               
                    <Card
                        InformacaoCategoria = {this.props.InformacaoCategoria}
                        transicao={this.props.transicao}
                        bandeira={this.props.carta.bandeira}
                        id={this.props.carta.id}
                        pais={this.props.carta.pais} idh={this.props.carta.idh} exp={this.props.carta.exp}
                        populacao={this.props.carta.populacao}
                        area={this.props.carta.area}
                         />
                </section>
            )
        }

    }


}

export default Visitante;