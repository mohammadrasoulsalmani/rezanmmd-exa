import React from 'react'
import styled from 'styled-components'
import CheckIcon from '@material-ui/icons/Check';

function FormComment() {

    return (
        <Container>
            <Wrapper>
                <Title>
                    ارسال نظرات و پیشنهادات
                </Title>
                <Form dir="rtl" >
                    <span>
                    <CheckIcon/>
                        دیدگاه های نامرتبط به مطلب تایید نخواهد شد</span>
                    <span>
                    <CheckIcon/>
                        از درج دیدگاه های تکراری پرهیز نمایید</span>
                    <span>
                    <CheckIcon/>
                        امتیاز دادن به دوره فقط مخصوص دانشجویان دوره می باشد</span>
                    <div>
                        <Label>دیدگاه</Label>
                        <TextArea rows="10" placeholder="نظرات و دیدگاه های خود را وارد نمایید" ></TextArea>
                    </div>
                    <div>
                        <Label>نام</Label>
                        <Input type="text" placeholder="نام خود را اینجا وارد کنید" />
                    </div>
                    <div>
                        <Label>ایمیل</Label>
                        <Input type="text" placeholder="ایمیل خود را اینجا وارد کنید" />
                    </div>
                    <InputSubmit type="submit" value="ارسال" />
                </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`

    width: 100%;
    height: 70vh;
    background-image: url('images/graph.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top top;
    padding-bottom: 50px;
    z-index: 100;
    @media (max-width : 1050px){
        /* width: 300px; */
        margin-bottom: 300px;
    }
    

`
const Wrapper = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;


`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    font-style: initial;
    letter-spacing: -0.5px;
    margin: 70px 0 20px 0;
    
    
`
const Form = styled.form`
    
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: rgb(51 59 75 / 5%) 0px 16px 40px 0px;
    border: 1px solid rgb(245, 248, 251);
    border-radius: 16px;
    margin: 15px 0;
    position: relative;
    width: 30%;
    align-items: center;
    direction: rtl;
    padding: 30px;

    div {
        position: relative;
        width: 100%;
        margin: 20px;
        margin-top: 40px;
    }

    span{
        width: 70%;
        font-size: 11px;
        font-weight: 400;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        direction: ltr;
        margin-top: 10px;
        @media (max-width : 1050px){
        width: 100%;
        }
    }

    @media (max-width : 1050px){
        width: 85%;
    }


`

const Label = styled.label`
    position: absolute;
    top: -8px;
    right: 6px;
    z-index: 1000;
    background-color: white;
    padding: 0px 3px;
    font-size: 13px;
    font-weight: 500;
`
const TextArea = styled.textarea`
    width: 100%;
    background-color: transparent;
    color: rgb(141, 147, 175);
    font-size: 1.2rem;
    padding: 11.8px 16px 11.8px 11.8px;
    border: 1px solid rgba(239, 239, 239, 0.753);
    resize: none;
    border-radius: 4px;
    ::placeholder{
        font-family: 'Iran Yekan';
        font-size: 15px;
    }

`
const Input = styled.input`

    width: 100%;
    background-color: transparent;
    color: rgb(141, 147, 175);
    font-size: 1.5rem;
    padding: 11.8px 16px 11.8px 11.8px;
    border: 1.5px solid rgba(239, 239, 239, 0.753);
    border-radius: 4px;
    ::placeholder{
        font-family: 'Iran Yekan';
        font-size: 13px;
    }
    
`
const InputSubmit = styled.input`

    border-radius: 4px;
    color: rgb(255, 255, 255);
    width: 100%;
    padding: 8px;
    font-size: 1.5rem;
    font-family: 'Iran Yekan';
    margin-top: 24px;
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: rgb(33, 179, 134);
    outline: none;
    border: none;

`

export default FormComment
