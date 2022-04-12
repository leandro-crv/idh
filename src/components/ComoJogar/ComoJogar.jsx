import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import before from "../../assets/imagens/before.svg"
import next from "../../assets/imagens/next.svg"
import fechar from "../../assets/imagens/sair.svg"
import bcj from "./bancoComoJogar"


class ComoJogar extends Component {
    constructor(props) {
        super(props)
        this.state={
            indice:0
        }
    }
    _proximo(){
        let atual = this.state.indice;
        if(atual==bcj.length-1){
            this.setState({
                indice:0
            })
        }
        else{

            this.setState({
                indice:atual+1
            })
        }
    }
    _anterior(){
        let atual = this.state.indice;
        if(atual==0){
            this.setState({
                indice:bcj.length-1
            })
        }
        else{
            this.setState({
                indice:atual-1
            })
        }
    }
    _comoJogar(){
       
        this.props.comoJogar(false)
    }
    render() {

        return (
            <section className={this.props.visivel ? 'cj' : 'none'}>
                <img src={fechar} className='cjFechar' onClick={()=> this._comoJogar()}></img>
                <p className='titulo'>{bcj[this.state.indice].titulo}</p>
                <ul className='cjLista'>
                    <li className='liNavegar'><img src={before} className='imgNavegar' name='before' onClick={()=>this._anterior()}/></li>
                    <li className='liImg'> <img className='cjImg' src={bcj[this.state.indice].imagem} id={'img'+this.state.indice} /></li>
                    <li className='liNavegar'><img src={next} className='imgNavegar' name='next' onClick={()=> this._proximo()}/></li>
                </ul>

                <p className='cjExplicacao'>{bcj[this.state.indice].explicacao}</p>
                <p className='indiceExplicacao'>{this.state.indice+1} de {bcj.length}</p>

            </section>


        )
    }
}

export default ComoJogar;

//src={bcj[this.state.indice].imagem}