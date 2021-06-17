import React , { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';


function Header() {
    const [burgerOpen , setBurgerOpen] = useState(false);
    return (
        <Container>
            <Logo href="/">
                <img src="https://rezanmmd.com/wp-content/uploads/2021/02/karagroup.svg" />
            </Logo>
            <Menu>
                <li><a href="#" >آموزش</a></li>
                <li><a href="#" >آچار کریپتو</a></li>
                <li><a href="#" >دوره های آموزشی</a></li>
                <li><a href="#" >موقعیت های شغلی</a></li>
                <li><a href="#" >موقعیت های آموزشی</a></li>
                <li><a href="#" >ارتباط با ما</a></li>
                <li><a href="#" >به خانواده کارا بپیوندید!</a></li>
            </Menu>
            <BurgerNav show={burgerOpen} >
                <CloseWrapper>
                    <CustomClear onClick={()=> setBurgerOpen(!burgerOpen)}/>
                </CloseWrapper>
                <li><a href="#" >آموزش</a></li>
                <li><a href="#" >آچار کریپتو</a></li>
                <li><a href="#" >دوره های آموزشی</a></li>
                <li><a href="#" >موقعیت های شغلی</a></li>
                <li><a href="#" >موقعیت های آموزشی</a></li>
                <li><a href="#" >ارتباط با ما</a></li>
                <li><a href="#" >به خانواده کارا بپیوندید!</a></li>
            </BurgerNav>
            <RightMenu>>
                <CustomMenu onClick={()=> setBurgerOpen(!burgerOpen)}/>
            </RightMenu>
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    background-color: #0f1835;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;

const Logo = styled.a`

    width: 35px;

    > img {
        width: 100%;
    }

`

const Menu = styled.div`
    font-family: 'Iran Yekan';
    display : flex ;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    margin-left: 90px;
    a {
        color : rgb(255, 255, 255);
        text-decoration: none;
    }
    li {
        font-weight: 400;
        font-size: 10px;
        padding: 0 10px;
        flex-wrap: nowrap;
        list-style: none;
    }

    @media (max-width : 1050px){
        display: none;
    }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index : 15;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: transform 0.1s ease-in ;
    transform : ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    


    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        font-size: 16px;
        list-style: none;
        a {
            font-weight: 600;
            font-size: 12px;
            text-decoration: none;
        }
    }

`;

const CustomClear = styled(ClearIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        font-size: 15px;
        text-transform: uppercase;
        margin-right: 10px;
    }

    display: none;
    @media (max-width : 1050px){
        display: flex;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    color: white;
   
`;

export default Header;
