import React, {Component} from "react";
import CardMesa from "../CardMesa/CardMesa";


class Mesa extends Component{
    constructor(props){
        super(props)
    }

    render(){
      
       if(!this.props.jogoEmAndamento){
           return(null)
       }
       else{

           return(
              <ul className='listaCards'>
                  {this.props.cartas.map((c,index)=>{
                      return(
                          <li key={index}>
                             <CardMesa/>
                          </li>
                      )
                  })}
              </ul> 
           )
       }
    }

}

export default Mesa;