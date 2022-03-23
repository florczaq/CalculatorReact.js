import { Component } from 'react';
import stringMath from 'string-math';
import './styles/App.css'
import Buttons from './components/Buttons';

export default class App extends Component {
	constructor() {
		super();
		this.state = { value: "" };
	}

	render() {
		return (
			<div className="App">
				<div className="scr">{this.state.value}</div>
				<Buttons data={['7', '8', '9', '/']} updateMeth={this.updateValue.bind(this)} />
				<Buttons data={['4', '5', '6', '*']} updateMeth={this.updateValue.bind(this)} />
				<Buttons data={['1', '2', '3', '+']} updateMeth={this.updateValue.bind(this)} />
				<Buttons data={['C', '0', '=', '-']} updateMeth={this.updateValue.bind(this)} />
			</div>
		);
	}

	updateValue(txt) {
		if (txt !== undefined && txt !== ' ') {
			switch (txt) {
				case 'C': this.setState({ value: "" }); break;

				case '=':

					try {
						let t = Math.round((stringMath(this.state.value) + Number.EPSILON) * 10000000) / 10000000;
						this.setState({ value: t }); break;
					} catch (e) { this.setState({ value: ":(" }); break; }

				default:
					if (this.state.value !== ":(")
						this.setState((prevState) => {
							return { value: prevState.value + txt }
						});
					break;
			}
		}
	}
}