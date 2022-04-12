import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Placar extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section className={this.props.classe ? 'testePlacar' : 'none'}>
                <p className='tituloPlacar'>Placar</p>
                <ul>
                    <li className='liPlacar'>
                        <span className='jogadorPlacar'>Jogador 1</span>
                        <span className='numeroPlacar'>{this.props.mandante}</span>
                    </li>
                    <li className='liPlacar'>
                        <span className='divisorPlacar'>x</span>
                    </li>
                    <li className='liPlacar'>
                        <span className='numeroPlacar'>{this.props.visitante}</span>
                        <span className='jogadorPlacar'>Jogador 2</span>
                    </li>
                </ul>
                <div>
                    <span className='rodadaPlacar'>Rodada {this.props.rodada} de {this.props.rodadasTotais}</span>
                </div>
            </section>

        )
    }

}

export default Placar;