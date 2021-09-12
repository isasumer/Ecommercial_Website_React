import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
width:60px;
height:60px;
background-color:#ccdfff;
position:absolute;
top:-60px;
left:-60px;
z-index:-1;
    animation: square 25s linear alternate infinite;
    @keyframes square {
        to {
            transform : translate(100vw, 100vh) ;
        }
    }
`
const Circle = styled.div`
width:100px;
height:100px;
background-color:#fa5513;
border-radius:50%;
position:absolute;
top:200px;
left:80px;
z-index:-1;
    animation: circle 25s linear alternate infinite;
    @keyframes circle {
        to {
            transform : translate(50vw, 80vh) ;
        }
    }
`
const Rect = styled.div`
width:40px;
height:70px;
background-color:#61fc6e;
position:absolute;
top:600px;
left:0px;
z-index:-1;
    animation: rect 25s linear alternate infinite;
    @keyframes rect {
        to {
            transform : translate(100vw, -50vh) ;
        }
    }
`
const AnimatedShapes = () => {
    return (
        <>
        <Square/>
        <Circle/>
        <Rect/>
            </>
    )
}

export default AnimatedShapes