import React, { Component } from 'react'
import Regform from "../Regform/Regform";
import partners from "../securStripe.png";


class SecondModalForm extends Component {

    render() {

        let languageManager = this.props.languageManager();

        return (
            <div className="SecondRegform">
                <div className="title">
                    <p>{languageManager.secondModal[0]}</p>
                    <p>{languageManager.secondModal[1]}</p>
                </div>
                <div className='inner'>
                    <div className="main-modal-text">
                        <p>{languageManager.secondModal_description[0]}<span>{languageManager.secondModal_description[1]}</span><br/>{languageManager.secondModal_description[2]}</p>
                    </div>
                   <Regform {...this.props} />
                   <p>{languageManager.secondModal_small_text}</p>
                    <div className="popup-img">
                        <img src={partners} alt={partners}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default (SecondModalForm);
