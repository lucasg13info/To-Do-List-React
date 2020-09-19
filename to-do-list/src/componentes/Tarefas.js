import React, { Component, Fragment } from "react";

export default class Tarefas extends Component {

    render() {
        const tarefas = ["Tarefa 1, Tarefa 2, Tarefa 3,"];
        return (
            <Fragment>
                <h1>To-Do List </h1>
                <ul>
                    <li>Tarefa 1 </li>
                    <li>Tarefa 2 </li>
                    <li>Tarefa 3 </li>
                </ul>
            </Fragment>
        );
    }

}
