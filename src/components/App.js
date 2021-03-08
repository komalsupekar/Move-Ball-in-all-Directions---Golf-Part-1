import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App=()=>{
    const [renderBall,setRenderBall]=useState({left:0,top:0});
    const[posi,setPosi]=useState(0);
    const [ballpos,setBallpos]=useState({left:0,top:0})
    useEffect(()=>{
        document.addEventListener("keydown",(event)=>{
            //all logic will be here
            console.log("key code is",event.keyCode,ballpos);
            switch(event.keyCode){
                case 39:
                    setPosi({
                        left:ballpos.left+5,
                        top:ballpos.top,
                    });
                break;
                case 40:
                    setPosi({
                        left:ballpos.left,
                        top:ballpos.top+5,
                    });
                break;
                case 37:
                    setPosi({
                        left:ballpos.left-5,
                        top:ballpos.top,
                    });
                break;
                case 38:
                    setPosi({
                        left:ballpos.left,
                        top:ballpos.top-5,
                    });
                break;
            }
        })
    },[posi]);//add eventlistener during components didmount

    // useEffect(()=>{
    //     setBallpos(posi);
    // },[posi])
    const buttonClickHandler=()=>{
        setRenderBall(true)
    };
    const renderBallOrButton=()=>{
        if(renderBall)
        {
            return <div className="ball" style={{
                left:ballpos.left +"px",
                top:ballpos.top +"px,",
                position:"absolute"}}></div>
        }
        else
        {
            return <button onClick={buttonClickHandler}>Click for One Ball</button>
        }
    };

    



    // bind ArrowRight keydown event
        return <div className="playground">{renderBallOrButton()}</div>
};


export default App;

