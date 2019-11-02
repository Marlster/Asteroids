import React, { Component } from 'react'
import Orbit from './Orbit';

class Map extends React.Component<{}>{

    state = {
        orbits: [
            {e: 2, a: 1},
            {e: 3, a: 1}
        ],
        text: "PRESS TO LAUNCH", 
        launched: false
    }

    handleClick = () => {
        var _this = this;
        setTimeout(function(){
            _this.setState({text: "GET"})
        },1);
        setTimeout(function(){
            _this.setState({text: "READY"})
        },1000);
        setTimeout(function(){
            _this.setState({text: "TO"})
        },2000);
        setTimeout(function(){
            _this.setState({text: "LAUNCH"})
        },3000);
        setTimeout(function(){
            _this.setState({text: "3"})
        },4000);
        setTimeout(function(){
            _this.setState({text: "2"})
        },5000);
        setTimeout(function(){
            _this.setState({text: "1"})
        },6000);
        setTimeout(function(){
            _this.setState({text: "BLASTOFF!!!!"})
        },7000);
        setTimeout(function(){
            _this.setState({launched: true})
        },8000);
    }
    componentDidMount = async () => {
        let response = await fetch(`https://marxmoonmen.ml/api?dateMin=2019-11-02&dateMax=2020-01-01&distMin=0&distMax=0.5`);
        this.setState({orbits: response});
    }
    render () {
        if (this.state.launched) {
            return (
                <Orbit bgColor="blue" orbits={this.state.orbits}/>
            )
        } else {
            return (
                <div className='button__container'>
                    <button className='button' onClick={this.handleClick}>
                        {this.state.text}
                    </button>
                </div>
            )
        }
    }
}

export default Map;