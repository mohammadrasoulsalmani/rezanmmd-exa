import React from 'react'
import styled from 'styled-components';
import ReactCardCarousel from "react-card-carousel";



function Offers() {
    return (
        <Div>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                <Slide>
                    <img src='images/1.png' alt='دوره تخصصی' />
                    <Title>
                    دوره پیشرفته 
                    </Title>
                </Slide>
                <Slide>
                    <img src='images/2.png' alt='دوره تخصصی' />
                    <Title>
                    دوره پیشرفته 
                    </Title>
                </Slide>
                <Slide>
                    <img src='images/3.png' alt='دوره تخصصی' />
                    <Title>
                    دوره پیشرفته 
                    </Title>
                </Slide>
                <Slide>
                    <img src='images/4.png' alt='دوره تخصصی' />
                    <Title>
                    دوره پیشرفته 
                    </Title>
                </Slide>
            </ReactCardCarousel>
        </Div>
    )
}

const Div = styled.div`

    position: relative;
    height: 60vh;
    margin-top: 175px;
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    /* background-color: #ffb100; */

`
const Slide = styled.div`

    height: 450px;
    width: 400px;
    text-align: center;
    background-color: #2088ff;
    color: white;
    font-family: 'Iran Yekan';
    border-radius: 10px ;
    box-sizing: border-box;
    cursor: pointer;
    z-index: -1;


    img {
        width: 400px;
        border-radius: 7px 7px 0 0 ;

        @media (max-width : 1050px){
        width: 300px;

        }
        @media (max-width : 820px){
        width: 200px;
         } 
    }

    @media (max-width : 1050px){
        width: 300px;
        height: 350px;
    }
    
    @media (max-width : 820px){
        width: 200px;
        height: 250px;
        /* margin-top: 150px; */
        z-index: -1;
    }

`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 350;
    font-style: initial;
    letter-spacing: -0.5px;
    color: white;
    
    @media (max-width : 1050px){
        font-size: 20px;
    }
    
    @media (max-width : 820px){
        font-size: 15px;
    }
`;

export default Offers
