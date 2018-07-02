import React, { Component } from 'react';

//Components
import AdatTabla from './AdatTabla';

//Adat
import terem from '../jasonok/terem.json';

class TanteremLista extends Component {
    constructor(props) {
        super(props);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.state = {
            terem
        };
    }

    handleDataChange(terem) {
        this.setState({terem});
    }

    render() {
        return(
            <div className="TanteremLista">
                <h2>Tentermeket itt mutatja</h2>
                    <AdatTabla headers={['ID', 'Terem', 'Emelet', 'Osztály', 'PC', 'WiFi']} datas={this.state.terem} handleDataChange={this.handleDataChange} />
            </div>
        );
    }
}

export default TanteremLista;