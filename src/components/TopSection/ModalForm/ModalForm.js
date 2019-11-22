import React, { Component } from 'react'
import Regform from "../Regform/Regform";


class ModalForm extends Component {

    render() {

        let languageManager = this.props.languageManager();

        return (
            <div className="FirstRegform">
                <div className="title">
                    <p>{languageManager.firstModal[0]}</p>
                    <p>{languageManager.firstModal[1]}</p>
                </div>
                <div className='inner'>
                    <div className="main-modal-text">
                        <p>{languageManager.firstModal_subtitle[0]}<span>{languageManager.firstModal_subtitle[1]}</span>{languageManager.firstModal_subtitle[2]}</p>
                    </div>
                   <Regform {...this.props} />
                </div>
            </div>
        )
    }
}
export default (ModalForm);
