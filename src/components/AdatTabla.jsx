import React, { Component } from 'react';

class AdatTabla extends Component {
    constructor(props){
        super(props);
        this.handleDataChange = this.handleDataChange.bind(this);
        const datas = this.props.datas;
        this.state = {
            datas
        };
    }

    handleDataChange(e) {
        const datas = this.props.datas;
        const act = datas[e.target.id];
        act[e.target.name] = e.target.value;
        datas[e.target.id] = act;
        this.props.handleDataChange(datas);
    }

    render() {
        return(
            <table>
                <thead>
                    <tr>{this.props.headers.map((e, i)=><th key={i}>{e}</th>)}</tr>
                </thead>
                <tbody>
                    {this.props.datas.map((e,i)=>
                        <tr key={i}>
                        {Object.entries(e).map(([key,item],j)=>(
                            key==="id" ? <td>{item}</td> : <td key={j}><input type="text" value={item} id={i} name={key} onChange={this.handleDataChange} /></td>
                        ))}
                        </tr>)
                    }
                </tbody>
            </table>
        );
    }
}

export default AdatTabla;