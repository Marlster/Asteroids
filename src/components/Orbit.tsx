import React from 'react';
//import { Stage, Layer, Rect, Text } from 'react-konva';
import PropTypes from 'prop-types';
//import Konva from 'konva';
import { convertToView } from '@ionic/core/dist/types/components/nav/view-controller';


//creates orbit ellipse on canvas
class Orbit extends React.Component<{bgColor: string, orbits: Array<{e: number, a: number}>}> {
    private orbit: React.RefObject<HTMLCanvasElement>;
    
    constructor (props:any){
        super(props);
        this.orbit = React.createRef();
    }

    componentDidMount() {
        this.updateCanvas();
      }
      
    componentDidUpdate(){
        this.updateCanvas();
    }
    
      updateCanvas(){
        const canvas = this.orbit.current;
        const ctx = canvas.getContext('2d');
        //it's a sun at one of the foci points
        ctx.beginPath();
        ctx.arc(1753, 540, 20, 0, 2 * Math.PI);
        ctx.fillStyle="gold";
        ctx.fill();

        //it's a earth
        ctx.beginPath();
        ctx.arc(1353, 540, 10, 0, 2 * Math.PI);
        ctx.strokeStyle="blue";
        ctx.stroke();


        ctx.strokeStyle="black"
        //third is major axis, fourth is minor axis
        //fifth is rotation in rads
        //calulcate b using eccentricity - will have to be scaled up to match somhow 
        //multipled by 400. 1au = 400
        const au=400;
        const x=1600;
        const y=540;
        for (let i=0;i<this.props.orbits.length;i++){
            console.log("Loop");
            const a=au*this.props.orbits[i].a;
            //semi minor axis equation ie. a^2(1-e^2)
            const b=au*Number(Math.pow(this.props.orbits[i].a,2)*(1-Math.pow(this.props.orbits[i].e,2)));
            const rotation=0;
            ctx.beginPath()
            ctx.ellipse(x,y,a,b,rotation,0,2 * Math.PI);
            ctx.stroke();
        }

      }

    render() {
        return (
            <canvas ref={this.orbit} width={1980} height={800}/>
        );
    }
};

export default Orbit;