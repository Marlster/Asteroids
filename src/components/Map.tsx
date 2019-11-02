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

    handleClick () {
        this.setState({text: "GET READY"})
        var _this = this;
        setTimeout(function(){
            _this.setState({text: "TO"})
        },2000);
        setTimeout(function(){
            _this.setState({text: "LAUNCH"})
        },4000);
        setTimeout(function(){
            _this.setState({text: "3"})
        },6000);
        setTimeout(function(){
            _this.setState({text: "2"})
        },7000);
        setTimeout(function(){
            _this.setState({text: "1"})
        },8000);
        setTimeout(function(){
            _this.setState({text: "BLASTOFF!!!!"})
        },9000);

    }
    componentDidMount = async () => {
        let response = await fetch("http://someurl:3000/ENDPOINT", {
            method: 'GET',
            credentials: "same-origin",
            mode: "same-origin",    
        });
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