import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopSection from './components/TopSection/TopSection'


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            page: 'main',
        };

        this.handleStep = this.handleStep.bind(this);
    }

    handleStep = (step) => {
        this.setState({step})
    };

    handleSubmit = () => {
        this.props.handleSubmit()
        .then(() => this.setState({ step: 1 }))
    };

    render() {

        return (
            <div className='App'>
                <TopSection {...this.props} handleStep={this.handleStep} handleSubmit={this.handleSubmit} step={this.state.step}/>
            </div>
        )
    }
}
