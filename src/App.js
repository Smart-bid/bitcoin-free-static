import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopSection from './components/TopSection/TopSection'
import SecondModalForm from "./components/TopSection/ModalForm/SecondModalForm";
import Modal from "react-bootstrap/Modal";


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            page: 'main',
            showModal: false,
            secondModalShow: false
        };
    }

    handleHide = () => this.setState({ showModal: false });
    handleShow = () => this.setState({ showModal: true });

    handleStep = (step) => {
        this.setState({step})
    };

    handleSubmit = () => {
        this.props.handleSubmit()
            .then(res => (res.redirectUrl) ? window.location = res.redirectUrl : this.setState({responseError: res.error}, this.handleStep(this.props.step + 1)))
    };

    secondModalHide = () => {
        this.setState({ secondModalShow: false });
        console.log(this.state);
    };

    render() {

        return (
            <div className='App'>
                <TopSection {...this.props} show={this.state.showModal} handleHide={this.handleHide} handleShow={this.handleShow} handleStep={this.handleStep} handleSubmit={this.handleSubmit} secondModalHide={this.secondModalHide} step={this.state.step} lastError={this.state.responseError}  />
            </div>
        )
    }
}
