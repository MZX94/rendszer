import React, { Component } from 'react';

//Components
import AdatTabla from './AdatTabla';

//Adat
import munkarend from '../jasonok/munkarend.json';

class MunkarendLista extends Component {
    constructor(props) {
        super(props);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.state = {
            munkarend
        };
    }

    handleDataChange(munkarend) {
        this.setState({munkarend});
    }

    render() {
        return(
            <div className="TanteremLista">
                <AdatTabla headers={['', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek']} datas={this.state.munkarend} handleDataChange={this.handleDataChange} />
            </div>
        );
    }
}

export default MunkarendLista;