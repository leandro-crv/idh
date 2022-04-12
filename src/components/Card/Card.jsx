import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import info from "../../assets/imagens/info.svg"





class Card extends Component {
   static n = 0;
    constructor(props){
       super(props);
        
     
   }
   
   
   
   contador(){
    Card.n += 1;
    this.x = Card.n
    return this.x
    }


    _InformacaoCategoria(evento){
       let categoria = evento.getAttribute('name').split('info')
        this.props.InformacaoCategoria(categoria[1])
    }
    
    render() {
       
      
        var ultimaJogada = this.props.ultimaJogada
        if(this.props.resultado){
            var r = this.props.resultado
            var classeBotao;
            if(r==null){
               
                 classeBotao = 'btn btn-secondary btn-block'
            }
            else if(r=='Ganhou!'){
                 classeBotao = 'btn btn-success btn-block'
            }
            else if(r=='Empatou!'){
                 classeBotao = 'btn btn-warning btn-block'
            }
            else{
                 classeBotao = 'btn btn-danger btn-block'
            }
        }
      
        
        return (
          
            <ul className={this.props.transicao ? 'testeCard teste' : 'testeCard'} name='xy' id={this.props.id}>
            <li className='liImg'>
           <img className="imgBand" src={this.props.bandeira} alt={this.props.pais}></img>
           </li>
           <li className='nomeDoPais'>{this.props.pais}</li>
            <li className='categoriaDado'>
                <label className='nomeDoDado'>IDH</label>
                <img src={info} className='infoTeste' onClick={(x)=> this._InformacaoCategoria(x.target)} name='infoidh'></img>
                <button name="idh" className = {ultimaJogada=='idh'? classeBotao : 'btn btn-secondary btn-block'}>{(this.props.idh).toLocaleString('en').replace('.',',')}</button>
            </li>
            <li className="categoriaDado">
                <label className='nomeDoDado'>Expectativa de vida</label>
                <img src={info} className='infoTeste' onClick={(x)=> this._InformacaoCategoria(x.target)} name='infoexp'></img>
                <button name='exp' className = {ultimaJogada=='exp'? classeBotao : 'btn btn-secondary btn-block'}>{(this.props.exp).toLocaleString('en').replace('.',',')} anos</button>
            </li>
            <li className="categoriaDado">
                <label className='nomeDoDado'>População</label>
                <img src={info} className='infoTeste' onClick={(x)=> this._InformacaoCategoria(x.target)} name='infopopulacao'></img>
                <button name='populacao' className = {ultimaJogada=='populacao'? classeBotao : 'btn btn-secondary btn-block'}>{(this.props.populacao).toLocaleString('en').replaceAll(',','.')}</button>
            </li>
            <li className="categoriaDado">
                <label className='nomeDoDado'>Área</label>
                <img src={info} className='infoTeste' onClick={(x)=> this._InformacaoCategoria(x.target)} name='infoarea'></img>
                <button name='area' className = {ultimaJogada=='area'? classeBotao : 'btn btn-secondary btn-block'}>{(this.props.area).toLocaleString('en').replaceAll(',','.')}</button>
            </li>         
            </ul>
           
           
        )
    }
}

export default Card

