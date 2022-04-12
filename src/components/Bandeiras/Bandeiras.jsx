import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//https://www.npmjs.com/package/country-flags-svg

class Bandeiras extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (!this.props.bandeiras) {
            return (null)
        }
        else {
            let textoCartas = 'aleatóriamente por todo ranking de IDH.'
            if(this.props.quaisCartas == 'melhores'){
                textoCartas = 'entre os melhores colocados no ranking de IDH.'
            }
            else if(this.props.quaisCartas == 'piores'){
                textoCartas = 'entre os piores colocados no ranking de IDH.'
            }
            return (
                <section className='cb'>
                <p className='bandeirasDisponiveis'>Você está jogando com {this.props.bandeiras.length} países escolhidos {textoCartas} <span className='bandeirasAlfabetica'>(As bandeiras estão por ordem alfabética).</span></p>
                
                    <ul>
                        {this.props.bandeiras.map((b, index) => {
                            return (
                                <li key={'band' + index}>
                                    <img src={b.bandeira}  alt={b.nome} className={!b.visivel ? 'imgBand cinza' : 'imgBand'}></img>
                                    <p className='nomeBandeira'>{b.nome}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            )
        }

    }
}

export default Bandeiras;



/* return(
    <li key={'band'+index}>
        <img src={b.bandeira} width="50px" alt={b.nome} className={!b.visivel?'cinza':''}></img>
        <p className='nomeBandeira'>{b.nome}</p>
    </li>
) */