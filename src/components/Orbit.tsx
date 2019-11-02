import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class Orbit extends React.Component<{bgColor: string, e: number, a: number}>{
    render() {
        var orbitStyle = {
            padding:10,
            margin:20,
            display:"inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            transform: "scaleX(" + this.props.e + ")",
            width:100,
            height:100,
        };
        return (
            <div style={orbitStyle}>
            </div>
        );
    }
};

export default Orbit;