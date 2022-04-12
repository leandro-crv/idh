import React, { Component } from "react";
import sair from "../../assets/imagens/sair.svg";
import inf from "./bancoInformacoes";


class Informacao extends Component {
    static n = 0;
    constructor(props) {
        super(props);
    }

    _fechar(){
        
        this.props.InformacaoCategoria(false)
    }

     
    

    render() {
      
        let i = this.props.info
        if(!i){
            return (null)
        }
        else{
            return(
                <ul className='informacoes' >
                    <img src={sair} onClick={(x)=> this._fechar()} className='botaoFechar'></img>
                    <li className='infoTitulo'>{inf[i].titulo}</li>
                    <li><span className='rotulo'>Unidade de medida:</span> {inf[i].unidadeDeMedida}</li>
                    <li><span className='rotulo'>Resumo:</span> {inf[i].explicacao}</li>
                    
                    <li><span className='rotulo'>Fonte:</span> {inf[i].fonte} - Ano ({inf[i].dataDado})</li>
                    <li><span className='rotulo'>Url:</span> <a href={inf[i].url} target='_blank'>{inf[i].url}</a></li>
                </ul>


            )
        }
                 
        
      
    }
}

export default Informacao;

/* return(
    <section className="pop">
         <img src={sair} onClick={(x)=> this._fechar()} className='botaoFechar'></img>
         <p className='categoria'>IDH - Índice de Desenvolvimento Humano</p>
         <p className='vencedor'>Unidade de medida</p>
         <p className='explicacao'>O índice é organizado pela ONU para medir o grau de desenvolvimento das nações. Ele é composto de  dados de expectativa de vida ao nascer, educação e PIB (PPC) per capita (como um indicador do padrão de vida) recolhidos em nível nacional.</p>

    </section>
               
 )
}
else if(i=='exp'){
 return(
     <section className="pop">
     <p className='categoria'>Expectativa de vida <img src={sair} onClick={(x)=> this._fechar()} className='botaoFechar'></img></p>
     <p className='vencedor'>Ganha o maior número</p>
     <p className='explicacao'>Esse indicador mostra a quantidade de anos que uma pessoa nascida em uma localidade, em um ano de referência, deve viver. Reflete as condições de saúde e de salubridade no local, já que o cálculo da expectativa de vida é fortemente influenciado pelo número de mortes precoces.</p>

</section> 
 ) */