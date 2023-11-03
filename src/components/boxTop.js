import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import Datapicker from './dataPicker';

function BoxTop() {
    const [isVisible] = useState(true);
    useEffect(() => {
        if (isVisible) {
         gsap.from('.animation', { 
            immediateRender: false,
            opacity: 0,
            y:  50,
            duration: 1,
            ease: "power4.out",
        });
        }
      }, [isVisible]);
    return(
        <>
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
            <div className="animation col-span-12 box box-top">
            <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" icon-name="edit-3" className="lucide lucide-edit-3 w-4 h-4 mr-2" data-lucide="edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            Add New Schedule </button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veniam voluptates fugit assumenda atque, quod accusamus consequatur temporibus adipisci laudantium qui molestiae numquam iste non asperiores illo. Odit, voluptate laudantium!</p>  
            </div>
          <Datapicker />
      </div>
      </>
    );
}

export default BoxTop;