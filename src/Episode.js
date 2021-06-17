import React , { useState , useEffect , useContext  } from 'react';
import styled from 'styled-components';
import CloudDownloadTwoToneIcon from '@material-ui/icons/CloudDownloadTwoTone';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import { LoadContext } from './BuyContext';





function Episode() {
    const context = useContext(LoadContext)
    return (
        <View>
            <Title>جلسات دوره</Title>

            <Ul>
                <Li>

                    <RightPart>
                        <span>۱</span>
                        <p>پارت  ۱</p>

                    </RightPart>
                    <LeftPart>
                    {
                        context.buy ?  
                        <a href="https://rezanmmd.com/" ><CloudDownload show={context.buy} /></a>
                        :
                        <a ><CloudDownload show={context.buy} /></a>

                    }
                   
                        { context.buy ? <UnLock/> : <Lock/> }
                        <p>نقدی</p>
                    </LeftPart>
                </Li>

                <Li>

                    <RightPart>
                        <span>۲</span>
                        <p>پارت  ۲</p>


                    </RightPart>
                    <LeftPart>
                        {
                        context.buy ?  
                        <a href="https://rezanmmd.com/" ><CloudDownload show={context.buy} /></a>
                        :
                        <a ><CloudDownload show={context.buy} /></a>

                    }
                        { context.buy ? <UnLock/> : <Lock/> }
                        <p>نقدی</p>
                    </LeftPart>
                </Li>

                <Li>

                    <RightPart>
                        <span>۳</span>
                        <p>پارت  ۳</p>

                    </RightPart>
                    <LeftPart>
                    {
                        context.buy ?  
                        <a href="https://rezanmmd.com/" ><CloudDownload show={context.buy} /></a>
                        :
                        <a ><CloudDownload show={context.buy} /></a>

                    }
                        { context.buy ? <UnLock/> : <Lock/> }

                        <p>نقدی</p>
                    </LeftPart>
                </Li>

                <Li>

                    <RightPart>
                        <span>۴</span>
                        <p>پارت  ۴</p>

                    </RightPart>
                    <LeftPart>
                    {
                        context.buy ?  
                        <a href="https://rezanmmd.com/" ><CloudDownload show={context.buy} /></a>
                        :
                        <a ><CloudDownload show={context.buy} /></a>

                    }
                        { context.buy ? <UnLock/> : <Lock/> }

                        <p>نقدی</p>
                    </LeftPart>
                </Li>

                <Li>

                    <RightPart>
                        <span>۵</span>
                        <p>پارت  ۵</p>

                    </RightPart>
                    <LeftPart>
                    {
                        context.buy ?  
                        <a href="https://rezanmmd.com/" ><CloudDownload show={context.buy} /></a>
                        :
                        <a ><CloudDownload show={context.buy} /></a>

                    }
                        { context.buy ? <UnLock/> : <Lock/> }

                        <p>نقدی</p>
                    </LeftPart>
                </Li>

            </Ul>
        </View>
    )
}

const View = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    padding: 0 50px;
    font-style: initial;
    letter-spacing: -0.5px;
    margin: 70px 0 20px 0;
    
    @media (max-width : 1050px){
        font-size: 20px;
    }
    
    @media (max-width : 820px){
        font-size: 15px;
    }
`;

const Ul = styled.ul`
    margin: 50px 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Li = styled.li`
    background-color: white;
    border: 1px solid #e5e5e5;
    width: 80%;
    border-radius: 10px;
    height: 70px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    @media (max-width : 1050px){
        width: 100%;
        height: 50px;
    }
    

`
const RightPart = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    
    span {
        width: 40px;
        height: 40px;
        background-color: #64748b;
        color: white;
        border-radius: 50%;
        border: 3px solid #9eacbf;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        margin-right: 13px;
    }

    p {
        font-size: 16px;
        font-weight: 500;
        margin-right: 20px;
    }

    @media (max-width : 1050px){
        width: 50%;
        span {
            width: 20px;
            height: 20px;
            font-size: 13px;
        }

        p {
            font-size: 10px;
        }
    }
`
const LeftPart = styled.div`
    width: 30%;
    display: flex;  
    flex-direction: row;
    justify-content: flex-end;

    p {
        margin: 0px 20px;
        font-size: 15px;
        font-weight: 500;
    }


    @media (max-width : 1050px){
        width : 50%;
        p {
            font-size: 9px;
            margin: 0px 12px;
        }
    }

`

const CloudDownload = styled(CloudDownloadTwoToneIcon)`

    margin-left: 20px;

    cursor: ${props => props.show ? "pointer" : "" };

    @media (max-width : 1050px){
        margin-left: 10px;
    }

`
const Lock = styled(LockIcon)`



`
const UnLock = styled(LockOpenRoundedIcon)`

    

`

export default Episode
