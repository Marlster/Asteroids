import React, { Component } from 'react'
class Map extends React.Component<{bgColor: string, e: number, a: number}>{

    state = {
        orbits: {
            someorbit: 2
        }
    }

    handleClick () {
        console.log('Success!')
    }
    componentDidMount = async () => {
        let response = await fetch("http://someurl:8000/ENDPOINT", {
            method: 'GET',
            credentials: "same-origin",
            mode: "same-origin",
        }
        );
        this.setState({onlineUsers: response});
    }
    render () {
        return (
        <div className='button__container'>
            <button className='button' onClick={this.handleClick}>
            Click Me
            </button>
        </div>
        )
    }
}

export default Map;