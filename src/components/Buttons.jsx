import React, { Component } from "react";
import '../styles/Buttons.css'

export default class Buttons extends Component {
    render() {
        let data = this.props.data;
        return (
            <div className="wers">
                <Button dataFromParent={data[0]} updateV={this.props.updateMeth.bind(this)} />
                <Button dataFromParent={data[1]} updateV={this.props.updateMeth.bind(this)} />
                <Button dataFromParent={data[2]} updateV={this.props.updateMeth.bind(this)} />
                <Button dataFromParent={data[3]} updateV={this.props.updateMeth.bind(this)} />
            </div>
        );
    }
}

class Button extends Component {

    constructor() {
        super();
        this.upd = this.upd.bind(this);
    }

    render() {
        let data = this.props.dataFromParent;
        return (
            <button
                className="bts" onClick={this.upd} > {data}
            </button>
        );
    }

    upd() {
        this.props.updateV(this.props.dataFromParent);
    }
}