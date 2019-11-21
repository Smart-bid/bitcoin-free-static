import React, {Component} from 'react'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer.js'
import Regform from './Regform/Regform'

import video from './Regform/bc-freedom.mp4'
import logo from './logo.png'
import timeLogo from './timeLogoText.jpg'
import partners from './securStripe.png'


export default class TopSection extends Component {
    constructor(props) {
        super(props)
        let today = new Date(),
            date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        this.state = {
            date: date
        };
        this.regPanel = React.createRef();
    }


    handleScroll() {

        let panel = this.regPanel.current;

        window.scrollTo({
            top: panel.offsetTop,
            left: 0,
            behavior: 'smooth'
        })

    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className='TopSection'>
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col p-0">
                                <div className="logo text-lg-right">
                                    <img src={logo} alt="logo"/>
                                </div>
                            </div>
                            <div className="col text-lg-right p-0">
                                <img src={timeLogo} alt="timeLogo"/>
                            </div>
                            <div className="col p-0">
                                <Header languageManager={this.props.languageManager}
                                        handleScroll={this.handleScroll.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="video-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 video-link">
                                <div className="video-tittle"><p>{this.state.date}</p></div>
                                <VideoPlayer link={video}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headline">
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h1><span>{languageManager.title[0]}</span> {languageManager.title[1]}<br/><span className="text-uppercase">{languageManager.title[2]}</span></h1>
                                    <button className="red-btn">{languageManager.button}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partners-block">
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12">
                                <div className="img">
                                    <img src={partners} alt={partners}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container-fluid box_wrap">
                        <div className="row">
                            <div className="col-12">
                                <p>{languageManager.risk[0]}</p>
                                <p>{languageManager.risk[1]}</p>
                                <p>{languageManager.risk[2]}</p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*<div className="top-reg" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-12">

                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12">
                                <div className="regform" ref={this.regPanel}>
                                    <div className="reg-title">
                                        <span>{languageManager.topreg1}</span> {languageManager.topreg2}</div>
                                    <Regform {...this.props} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        )
    }
}
