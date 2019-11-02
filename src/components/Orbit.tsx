import React from 'react';
import { convertToView } from '@ionic/core/dist/types/components/nav/view-controller';



//creates orbit ellipse on canvas
class Orbit extends React.Component {
    private orbit: React.RefObject<HTMLCanvasElement>;
    constructor (props){
        super(props);
        this.orbit = React.createRef();
    }

    componentDidMount() {
        const canvas = this.orbit.current;
        const ctx = canvas.getContext('2d');
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        //third is major axis, fourth is minor axis
        //fifth is rotation in rads
        //calulcate b using eccentricity - will have to be scaled up to match somhow
        const b=2.9;
        const rotation=0;
        ctx.beginPath()
        ctx.ellipse(100,150,4.5,b,rotation,0,2 * Math.PI);
        ctx.stroke();
      }    

    render() {
/*         var orbitStyle = {
            padding:10,
            margin:20,
            display:"inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            transform: "scaleX(" + this.props.e + ")",
            width:100,
            height:100,

            put back in return maybe 
                        <div style={orbitStyle}>
            </div>
            
        }; */
        return (
            <canvas ref={this.orbit} width={200} height={300}/ >
        );
    }
};

export default Orbit;