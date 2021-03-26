import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App=()=>{
    const [renderBall,setRenderBall]=useState(false);
    const[posi,setPosi]=useState({left:5,top:5});
    const [ballpos,setBallpos]=useState({left:0,top:0})

    const updateXY=(x,y)=>{
        console.log(x,y);
        setBallpos({
            left:x,
            top: y,
            
        });
    };
    // useEffect(()=>{
        // const keyListener=document.addEventListener("keydown",(event)=>{
            //all logic will be here
            // console.log("key code is",event.keyCode);
            const handleListner =(event)=>{
            switch(event.keyCode){
                case 39:
                    updateXY(ballpos.left+5,ballpos.top);
                    break;
                case 38:
                    updateXY(ballpos.left,ballpos.top-5);
                    break;
                case 37:
                    updateXY(ballpos.left - 5,ballpos.top);
                    break;
                case 40:
                    updateXY(ballpos.left,ballpos.top + 5);
                    break;
                default:
                    break;
            }
        };
        
    //add eventlistener during components didmount

    useEffect(()=>{
        const keyListener=document.addEventListener("keydown",handleListner);
        console.log("keylistener is",keyListener);
        return function(){
            document.removeEventListener("keydown",handleListner);
        };
    },[ballpos]);

    const buttonClickHandler=()=>{
        setRenderBall(true)
    };
    const renderBallOrButton=()=>{
        if(renderBall)
        {
            return <div className="ball" style={{
                left:ballpos.left +"px",
                top:ballpos.top +"px",
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

