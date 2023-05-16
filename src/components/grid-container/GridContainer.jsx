import { useEffect } from 'react';
import { odescroll } from '../../odescroll/index';


const GridContainer = (p) => {

    useEffect(()=>{
        odescroll.init({
            oneDirection: true,
            threshold: 0.4
        });
    });
    

    return (
        <div className="grid-container" style={{gridTemplateColumns: `repeat(auto-fit, minmax(${p.minWidth}, 1fr))`, gap: p.gap}}>
            { p.children }
        </div>
    );
}

export default GridContainer;