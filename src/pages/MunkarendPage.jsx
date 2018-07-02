import React, { Component } from 'react';

//Components
import Munkarend from '../components/MunkarendLista';

class MunkarendPage extends Component {
    render() {
      return (
        <div className="MunkarendPage">
          <h1>Munkarend</h1>
          <Munkarend />
        </div>
      );
    }
    }
  
  export default MunkarendPage;