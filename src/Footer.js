import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <Wrap>
            <Logo>
                <img src="https://rezanmmd.com/wp-content/uploads/2021/02/karagroup.svg" />
            </Logo>
            <div>
                <Row>تهران ، اتوبان ستاری شمال بالاتر از مجتمع تجاری کوروش ، ساختمان کاخ</Row>
                <Row>44971349 - 021</Row>
                <Row>rezanmmd@gmail.com</Row>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`

    height: 40vh;
    width: 100%;
    display: flex;
    background-color: #121b38;
    flex-direction: column;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 20px 0 0;
    }


`
const Logo = styled.div`

    width: 100%;
    padding: 50px;
    height: 130px;
    /* border-bottom: 1px solid whitesmoke; */

    img {
        width: 60px;
    }

`

const Row = styled.div`

    width: 100%;
    color: white;

`

export default Footer
