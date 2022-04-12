import React, { Component } from "react"
import './assets/reset.css';
import "./assets/App.css"

import Bandeiras from "./components/Bandeiras/Bandeiras"
import bd from './bancoDeDados/bancoDeDados.js';
import ComoJogar from "./components/ComoJogar/ComoJogar";
import Header from "./components/Header/Header";
import Fontes from "./components/Fontes/Fontes";
import Informacao from "./components/Informacao/Informacao";
import Jogar from "./components/Jogar/Jogar";
import Mandante from "./components/Jogador/Mandante";
import Mesa from "./components/Mesa/Mesa";
import Visitante from "./components/Jogador/Visitante";
import stateInicial from "./stateInicial";
import Placar from "./components/Placar/Placar";

class App extends Component {
  constructor() {
    super();
    this.state = stateInicial

  }

  InformacaoCategoria(categoria){
   
    if(!categoria){
      this.setState({
        informacaoNoCard:false
      })
    }
    else{
      this.setState({
        informacaoNoCard:categoria
      })
    }
  }

  PegarDoBanco(ids) {

    if (Array.isArray(ids)) {
      const dados = []
      ids.map((ids) => {
        for (let i = 0; i < bd.length; i++) {
          if (ids == bd[i].id) {
            dados.push({
              id: bd[i].id,
              pais: bd[i].pais,
              idh: bd[i].idh,
              exp: bd[i].exp,
              bandeira: bd[i].bandeira,
              populacao:Number(bd[i].populacao),
              area:Number(bd[i].area)

            })
          }
        }
      })

      return dados
    }
    else {
      return (
        {
          id: bd[ids].id,
          pais: bd[ids].pais,
          idh: bd[ids].idh,
          exp: bd[ids].exp,
          bandeira: bd[ids].bandeira,
          populacao:Number(bd[ids].populacao),
          area:Number(bd[ids].area)

        }
      )
    }


  }

  DistribuirCartas(indices,quaisCartas) {
    var novoIndice = []
    indices.map((e, index) => index > 1 ? novoIndice.push(e) : '')
    var estadoAntigo = this.state
    
    this.setState({
      mesa: novoIndice,
      mandante: {
        carta: this.PegarDoBanco(indices[0]),
        visivel: true,
        placar: estadoAntigo.mandante.placar,
        ultimaJogada: estadoAntigo.mandante.ultimaJogada
      },
      visitante: {
        carta: this.PegarDoBanco(indices[1]),
        visivel: false,
        placar: estadoAntigo.visitante.placar
      },
      jogoEmAndamento: true,
      bandeiras: this.BuscarBandeiras(indices),
      cartasEmTransicao:false,
      rodada:estadoAntigo.rodada + 1,
      rodadasTotais:indices.length/2,
      quaisCartas:quaisCartas

    })
  }

  BuscarBandeiras(array) {
    var arrayBandeiras = []
    for (let i = 0; i < array.length; i++) {
      arrayBandeiras.push({
        id: array[i],
        nome: bd[array[i]].pais,
        bandeira: bd[array[i]].bandeira,
        visivel: true
      })
    }

    arrayBandeiras.sort(function(a,b){
      return a.nome.localeCompare(b.nome)
    })


    return arrayBandeiras
  }

  JogadaMandante(jogada) {
    let prevState = this.state
    let vencedor = this.CompararJogada(jogada, this.state.mandante.carta[jogada], this.state.visitante.carta[jogada])
    let placar = this.AlterarPlacar(vencedor, this.state.mandante.placar, this.state.visitante.placar)
    
    this.setState({
      mandante: {
        carta: prevState.mandante.carta,
        visivel: true,
        placar: placar.mandante,
        ultimaJogada: jogada
      },
      visitante: {
        carta: prevState.visitante.carta,
        visivel: true,
        placar: placar.visitante
      },
      resultado: {
        texto: placar.mensagemVencedor,
        visivel: true
      },
      cartasEmTransicao:true
     
    })

    setTimeout(() => {
      this.escurecerBandeiras(this.state.mandante.carta.id, this.state.visitante.carta.id)
       this.ProximaJogada(this.state.mesa)

    }, 3000);

  }

  escurecerBandeiras(b1, b2) {
    let bandeiras = this.state.bandeiras

    bandeiras.map((e) => {
      if (e.id == b1 | e.id == b2) {
        e.visivel = false
      }
    })

  }

  ProximaJogada(cartas) {

    if (cartas.length == 0) {
      this.FimDeJogo()
    }
    else {
      const prevState = this.state

      let novaMesa = [];
      cartas.map((e, index) => index > 1 ? novaMesa.push(e) : '')
      
      this.setState({
        mesa: novaMesa,
        mandante: {
          carta: this.PegarDoBanco(cartas[0]),
          visivel: true,
          placar: prevState.mandante.placar,
          ultimaJogada: null

        },
        visitante: {
          carta: this.PegarDoBanco(cartas[1]),
          visivel: false,
          placar: prevState.visitante.placar
        },
        resultado: {
          texto: null,
          visivel: false,
        },
        cartasEmTransicao:false,
        rodada: prevState.rodada + 1
      })
    }

  }

  FimDeJogo() {
    
    let mandante = this.state.mandante.placar
    let visitante = this.state.visitante.placar
    let vencedorFinal = ''
    if (mandante == visitante) {
      vencedorFinal = ('Fim de jogo: Empate!')
    }
    else if (mandante > visitante) {
      vencedorFinal = ('Fim de jogo: Jogador 1 Venceu!')
    }
    else {
      vencedorFinal = ('Fim de jogo: Jogador 2 Venceu!')
    }

    this.setState({
      resultado: {
        texto: vencedorFinal,
        visivel: true
      }
    })
  }

  RecomeçarJogo() {
    this.setState(stateInicial)
  }

  AlterarPlacar(vencedor, mandanteAtual, visitanteAtual) {
      let placar = {
      mandante: mandanteAtual,
      visitante: visitanteAtual,
      mensagemVencedor: 'Empatou!'
    }

    if (vencedor == 'mandante') {
      placar.mandante += 1
      placar.mensagemVencedor = 'Ganhou!'
      return placar


    }
    else if (vencedor == 'visitante') {
      placar.visitante += 1
      placar.mensagemVencedor = 'Perdeu!'
      return placar

    } else {
      return placar
    }

  }

  CompararJogada(tipo, valorMandante, valorVisitante) {
   
    if (tipo == 'idh' | tipo == 'exp' | tipo=='populacao'|tipo=='area') {
      if (valorMandante == valorVisitante) {
        return 'empate'
      }
      else if (valorMandante > valorVisitante) {
        return 'mandante'
      }
      else {
        return 'visitante'
      }
    }
  }

  comoJogar(x){
    
    this.setState({
      comoJogar:x
    })

  }

  mostrarFontes(x){
    this.setState({
      mostrarFontes:x
    })

  }

  render() {
    return (
      <section className="conteudo" >

        <header>
          <Header comoJogar={this.comoJogar.bind(this)} mostrarFontes={this.mostrarFontes.bind(this)} />
        </header>
        <main className="principal">
        
        <ComoJogar visivel={this.state.comoJogar} comoJogar={this.comoJogar.bind(this)}/>
        <Fontes visivel={this.state.mostrarFontes} mostrarFontes={this.mostrarFontes.bind(this)}/>
         
            <Bandeiras bandeiras={this.state.bandeiras} quaisCartas={this.state.quaisCartas}/>
         
            <Informacao info={this.state.informacaoNoCard} InformacaoCategoria={this.InformacaoCategoria.bind(this)}/>

          <ul id='mandanteJogarVisitante'>
         
            <li className='liApp'>
            <Mandante carta={this.state.mandante.carta}  JogadaMandante={this.JogadaMandante.bind(this)} visivel={this.state.mandante.visivel} resultado={this.state.resultado.texto} ultimaJogada={this.state.mandante.ultimaJogada} placar={this.state.mandante.placar} transicao={this.state.cartasEmTransicao} InformacaoCategoria = {this.InformacaoCategoria.bind(this)}/>
            </li>
            <li class='liApp'>
            <Placar classe={this.state.jogoEmAndamento} mandante={this.state.mandante.placar} visitante={this.state.visitante.placar} rodada={this.state.rodada} rodadasTotais={this.state.rodadasTotais}/>
            <div class='jogar'>
            <Jogar DistribuirCartas={this.DistribuirCartas.bind(this)} resultado={this.state.resultado} jogoEmAndamento={this.state.jogoEmAndamento} RecomeçarJogo={this.RecomeçarJogo.bind(this)} />
            </div>
                  
            <Mesa cartas={this.state.mesa} jogoEmAndamento={this.state.jogoEmAndamento} />
            </li>
            <li class='liApp'>
             <Visitante carta={this.state.visitante.carta} visivel={this.state.visitante.visivel} resultado={this.state.resultado.texto} placar={this.state.visitante.placar} transicao={this.state.cartasEmTransicao} InformacaoCategoria = {this.InformacaoCategoria.bind(this)}/>
            </li>
                 
          </ul>
 
        </main>
      </section>
    )
  }


}



export default App;

