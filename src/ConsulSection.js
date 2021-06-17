import React from 'react';
import styled from 'styled-components';

function ConsulSection() {
    return (
        <Container>
            <Wrapper>
                <Image>

                </Image>
                <Information>
                    <h2>
                    درخواست مشاوره
                    </h2>
                    <p>
                    برای کسب اطلاعات بیشتر درباره این دوره درخواست مشاوره خود را ارسال کنید و یا با ما در تماس باشید.
                    </p>
                    <Button>
                        درخواست مشاوره
                    </Button>
                </Information>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`

    width: 100%;
    height: 50vh;
    background: rgb(33, 179, 134);
    


`
const Wrapper = styled.div`

    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;

  

`

const Information = styled.div`

    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 35px;

    h2 {
        font-size: 35px;
        padding: 25px;
    }
    p{
        font-size: 15px;
        padding: 30px;
    }
    
    background-image: url('images/dots.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`
const Image = styled.div`

        /* width: 50%; */
        flex: 1;
        height: 100%;
        background-image: url('https://rezanmmd.com/wp-content/themes/studiare/assets/images/advice.png');
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: right bottom;
        @media (max-width : 1050px){
        display: none;
}

`

const Button = styled.button`
    border: none;
    outline: none;
    background-color: white;
    font-family: 'Iran Yekan';
    padding: 10px 25px;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;



`

export default ConsulSection
