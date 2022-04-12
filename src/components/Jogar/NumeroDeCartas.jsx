import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class NumeroDeCartas extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.visivel) {
            return (null)
        }
        else {
            return (
                <section className='formularioInicio'>
                    <label htmlFor='testeNumeroDeCartas'>Número de cartas (por jogador)</label>
                    <br></br>
                    <input type='number' id='testeNumeroDeCartas' placeholder='Máximo 94'></input>

                    <br></br>
                    <label className='labelEscolherCartas' >Escolher cartas</label>
                    <br></br>
                    <ul className='quaisCartas'>
                        <li className='liQuaisCartas'>
                            <input type='radio' name='qlCartas' value='aleatorias' className='inputQuaisCartas'></input>
                            <label>Aleatóriamente</label>
                        </li>
                        <li className='liQuaisCartas'>
                            <input type='radio' name='qlCartas' value='melhores' className='inputQuaisCartas'></input>
                            <label>Mais altas</label>

                        </li>
                        <li className='liQuaisCartas'>
                            <input type='radio' name='qlCartas' value='piores' className='inputQuaisCartas'></input>
                            <label>Mais baixas</label>

                      </li>
                    </ul>





                </section>

            )
        }

    }
}

export default NumeroDeCartas;