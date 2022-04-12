import React, { Component } from "react";
import Card from "../Card/Card";



class Mandante extends Component {
    constructor(props) {
        super(props)
    }

    _JogadaMandante(elemento) {
        if(this.props.transicao){
            return
        }
        var nome = elemento.getAttribute('name')
        if (nome == 'idh'|nome=='exp' | nome=='populacao' | nome=='area') {
            
            this.props.JogadaMandante(nome)
        }
     
    }

    
    render() {
        
        if(this.props.carta==null){
            return(
               null
            )
        }else{

            return (
                <section  key={this.props.id} onClick={(x) => this._JogadaMandante(x.target)} className={this.props.visivel ? 'jogador' : 'none'} >
              
                    <Card
                        InformacaoCategoria = {this.props.InformacaoCategoria}
                        transicao={this.props.transicao}
                        resultado={this.props.resultado}
                        ultimaJogada={this.props.ultimaJogada}
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

export default Mandante;



/* className={this.props.visivel ? 'block' : 'none'} */