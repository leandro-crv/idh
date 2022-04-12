import React, { Component } from "react";
import fechar from "../../assets/imagens/sair.svg";
import inf from "../Informacao/bancoInformacoes";

class Fontes extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var fontesDoBanco = []
        for(let property in inf){
            fontesDoBanco.push(property)
        }
       
        return(
            <section className={this.props.visivel ? 'fontes' : 'none'}>
                <img src={fechar} className='fontesFechar' onClick={()=> this.props.mostrarFontes(false)}/>
                <ul>
                    {fontesDoBanco.map((e)=>{
                        return(
                            <li>
                                <p className='fontesTitulo'>{inf[e].titulo}</p>
                                <p>{inf[e].fonte} ano ({inf[e].dataDado})</p>
                                <p>
                                <a href={inf[e].url} target='_blank'>{inf[e].url}</a>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default Fontes;