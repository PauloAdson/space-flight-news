import React from "react";

export class Counter extends React.Component {
    constructor() {
        super();
        // this.contador = 0;
        // Para mudar o estado de algo, deve utilizar o this.state = { nomdeDoEstado }
        this.state = { contador: 0, name: '', password: '' }
    }

    render() {
        return (
            <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                <h1>{this.state.contador}</h1>

                <div>
                    <button onClick={() => {
                        // ! this.contador = this.contador - 1;
                        this.setState({ contador: this.state.contador - 1 });
                    }}>Diminuir</button>

                    <button onClick={() => {
                        // ! this.contador = this.contador + 1;
                        this.setState({ contador: this.state.contador + 1 });
                    }}>Aumetar</button>
                </div>

                <form style={{ marginTop: '40px' }}>
                    <input type="text"
                        placeholder="Nome"
                        value={this.state.name}
                        onChange={(event) => {
                            this.setState({ name: event.target.value })
                        }}
                    />

                    <input type="password"
                        placeholder="Senha"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}