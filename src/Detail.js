import React , { useState } from 'react';
import styled from 'styled-components';
import Episode from './Episode';
import About from './About';
import Comment from './Comment';

function Detail() {
    const [select, setSelect] = useState(1);
    return (
        <Container>
            <Wrap>
                <Tabs>
                    <Tab onClick={() => setSelect(1)} show={select} >معرفی دوره</Tab>
                    <Tab  onClick={() => setSelect(2)} show={select} >جلسات دوره</Tab>
                    <Tab onClick={() => setSelect(3)} show={select} >نظرات</Tab>
                </Tabs>
                {
                    select == 1 ? <About /> : ""

                }
                {
                    select == 2 ? <Episode /> : ""
                    
                }
                {
                    select == 3 ? <Comment /> : ""
                    
                }
            </Wrap>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

const Wrap = styled.div`
    width: 70%;
    margin-top: 20px;
    box-shadow: rgb(51 59 75 / 5%) 0px 16px 40px 0px;
    border: 1px solid rgb(245, 248, 251);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    /* height: 200px; */
    padding: 5px;

`

const Tabs = styled.div`
    width: 100%;
    height: 60px;
    background-color: rgb(242, 246, 250);
    border: 1px solid rgb(228, 233, 238);
    border-radius: 12px;
    font-size: 19px;
    display: flex;
    justify-content: space-around;

    @media (max-width : 1050px){
        font-size : 15px;
        /* height: 50px; */
    }


`

const Tab

= styled.div`

    &:nth-child(3) {
        flex: 1;
        background-color: ${props => props.show == 3 ? 'rgb(32, 136, 255)' : 'white' };
        border-radius: 8px;
        color: ${props => props.show == 3 ? 'rgb(255, 255, 255)' : 'black' } ;
        margin: 4px;
        text-align: center;
        cursor: pointer;
        padding: 10px 0;
        
    }

    &:nth-child(2) {
        background-color: ${props => props.show == 2 ? 'rgb(32, 136, 255)' : 'white' };
        flex: 1;
        border-radius: 8px;
        color: ${props => props.show == 2 ? 'rgb(255, 255, 255)' : 'black' } ;
        margin: 4px;
        cursor: pointer;
        text-align: center;
        padding: 10px 0;
        
    }
    
    &:nth-child(1) {
        flex: 1;
        background-color: ${props => props.show == 1 ? 'rgb(32, 136, 255)' : 'white' };
        border-radius: 8px;
        color: ${props => props.show == 1 ? 'rgb(255, 255, 255)' : 'black' } ;
        margin: 4px;
        cursor: pointer;
        text-align: center;
        padding: 10px 0;
        
    } 

`

export default Detail
