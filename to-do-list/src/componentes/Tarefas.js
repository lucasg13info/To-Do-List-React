import React, { Component, Fragment } from "react";

export default class Tarefas extends Component {

    constructor(){
        super();
        this.state = {
            tarefa : "",
            tarefas : ["Adicione as tarefas"]
        };

        this.adicionaTarefa = this.adicionaTarefa.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <Fragment>
                <h1>To-Do List </h1>
                <input onChange = {this.handleChange} value ={ this.state.tarefa }/>
                <button onClick={this.adicionaTarefa}>Adicionar</button>
                <ul>
                    { this.state.tarefas.map(tarefa => <li>{ tarefa }</li>)}
                </ul>
            </Fragment>
        );
        
       


    }

    adicionaTarefa(){
          this.setState({
              tarefa : "",
               tarefas : [].concat(this.state.tarefas, this.state.tarefa)
            }); 
    }


    handleChange(event){
        this.setState({tarefa : event.target.value})
    }

}
