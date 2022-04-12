import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bd from '../../bancoDeDados/bancoDeDados.js';
import NumeroDeCartas from "./NumeroDeCartas";

class Jogar extends Component {
    constructor(props) {
        super(props);

    }

    handleIniciarJogo(x) {
        var botaoAtual = x.target.getAttribute('name')

        if (botaoAtual == 'Recomeçar Jogo') {
                        
            this.props.RecomeçarJogo()
        }
        else {
            
            var inputNumeroDeCartas = document.getElementById('testeNumeroDeCartas')

            if(inputNumeroDeCartas.value * 2 > 188){
                alert('número máximo é 94')
                return
            }
            else if(inputNumeroDeCartas.value > 0){
                var totalDeCartas = Number(inputNumeroDeCartas.value * 2);
            }
            else if(inputNumeroDeCartas.value == 0){
                var totalDeCartas  = 10
            }
            else if(inputNumeroDeCartas.value < 0){
                alert('selecione ao menos uma carta por jogador')
                return
            }
      
        
       
            

            let selecionarCartas = 'aleatorias';
            var quaisCartas = document.querySelectorAll(`[name='qlCartas']`)
            var arrayQuaisCartas = [...quaisCartas]
            arrayQuaisCartas.map((e)=> e.checked ? selecionarCartas=e.value : '')

            let todosIds = [];
            bd.map((e) => todosIds.push(e.id))

            let baralho = []
            if (selecionarCartas == 'aleatorias') {
                let arrayAleatório = shuffle(todosIds)
                for (let i = 0; i < totalDeCartas; i++) {
                    baralho.push(arrayAleatório[i])
                }
            } else if (selecionarCartas == 'melhores') {
                let b = []
                for (let i = 0; i < totalDeCartas; i++) {
                    b.push(todosIds[i])
                }
                baralho = shuffle(b)
            }
            else if (selecionarCartas == 'piores') {
                let todosIdsInvertidos = todosIds.reverse()
                let b=[]
                for (let i = 0; i < totalDeCartas; i++) {
                    b.push(todosIdsInvertidos[i])
                }
                baralho = shuffle(b)
            }

            function shuffle(array) {
                var tmp, current, top = array.length;

                if (top) while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }

                return array;
            }
            


            this.props.DistribuirCartas(baralho,selecionarCartas)
        }

    }



    render() {

        return (
            <ul>
            <li>
                <NumeroDeCartas visivel={this.props.jogoEmAndamento} />
            </li>
            <li>
                <p className={this.props.resultado.visivel ? 'resultadoJogada' : 'none'}>{this.props.resultado.texto}</p>
            </li>
            <li>
                    <button
                    onClick={this.handleIniciarJogo.bind(this)}
                    className="btn btn-secondary botao_iniciar"
                    name={this.props.jogoEmAndamento ? 'Recomeçar Jogo' : 'Iniciar Jogo'}>{this.props.jogoEmAndamento ? 'Recomeçar Jogo' : 'Iniciar Jogo'}
                    </button>
            </li>
            </ul>
        )
    }
}

export default Jogar;