import React, { Component } from 'react';

//Components
import TanteremLista from '../components/TanteremLista';

class TanteremPage extends Component {
    render() {
      return (
        <div className="TanteremPage">
          <h1>Tantermek</h1>
          <TanteremLista />
        </div>
      );
    }
    }
  
  export default TanteremPage;