import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import PropTypes from 'prop-types';
import Konva from 'konva';
import { convertToView } from '@ionic/core/dist/types/components/nav/view-controller';

function ellipse(props:any){
    const {ctx, x, y, a, b, r} = props;
    ctx.beginPath()
    ctx.ellipse(x,y,a,b,r,0,2 * Math.PI);
    ctx.stroke();

}

//creates orbit ellipse on canvas
class Orbit extends React.Component<{bgColor: string, orbits: Array<{e: number, a: number}>}> {
    private orbit: React.RefObject<HTMLCanvasElement>;

    componentDidMount() {
        this.updateCanvas();
      }
      
    componentDidUpdate(){
        this.updateCanvas();
    }
    
      updateCanvas(){
        const canvas = this.orbit.current;
        const ctx = canvas.getContext('2d');
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        //third is major axis, fourth is minor axis
        //fifth is rotation in rads
        //calulcate b using eccentricity - will have to be scaled up to match somhow

        const x=150;
        const y=150;
        const a=60;
        const b=30;
        const rotation=0;
        ellipse({ctx,x,y,a,b,rotation});
      }

    render() {
        return (
            <canvas ref={this.orbit} width={200} height={300}/ >
        );
    }
};

export default Orbit;