import React , { useState , useEffect , useContext } from 'react';
import styled from 'styled-components';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TimerIcon from '@material-ui/icons/Timer';
import StorageIcon from '@material-ui/icons/Storage';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadContext } from './BuyContext';



const Product = () => {
    const [selectDesc, setSelectDesc] = useState(true);
    const [title , setTitle] = useState('خرید دوره');
    const context = useContext(LoadContext)
    const loading = () => {
        context.setLoad(true);
        setTimeout(() => {
            context.setLoad(false)
            setTitle('دوره خریداری شده است')

            context.setBuy(true);
        }, 5000 )
    
    }

    return (
        <Container>
            <Wrap>
                <ProductImage>
                    <img src="https://rezanmmd.com/wp-content/uploads/2021/04/دوره-پیشرفته-1.png" alt="دوره پیشرفته" />
                </ProductImage>
                <ProductDetails>
                    <Title>
                    دوره پیشرفته بلاکچین و ارزهای دیجیتال
                    </Title>
                    <ProductPrice>
                        <label>
                            قیمت
                        </label>
                        <Price>
                        ۱,۵۰۰,۰۰۰
                            <label>
                                تومان
                            </label>
                        </Price>
                        
                    </ProductPrice>
                <ProductSelectDesc>
                    <ProductSelect>
                        {/* true */}
                        <Selected onClick={() => setSelectDesc(false)}  show={selectDesc} ><p>جزئیات دوره</p></Selected>
                        {/* false */}
                        <Selected onClick={() => setSelectDesc(true)} show={selectDesc} ><p>معرفی دوره</p></Selected>
                    </ProductSelect>

                    <ProductDescription>
                        {
                            selectDesc ? 
                            <p>
                            در این دوره به بررسی پروژه‌ها و مبانی بلاکچین و ارزهای دیجیتال از نگاهی تخصصی 
                            حرفه ای پرداخته می‌شود همچنین مبانی سرمایه گذاری تخصصی و بنیادی در ارزهای دیجیتال بررسی می گردد. 
                            </p> : 
                            <ul>
                            <li><AssignmentIcon /> <p>نوع دوره: پیشرفته</p></li>
                            <li><TimerIcon /><p>۱۸۰ دقیقه</p></li>
                            <li><StorageIcon /><p>۳۲۰۰ مگابایت</p></li>
                        </ul>
                        }
                    </ProductDescription>
                </ProductSelectDesc>

                    <Button onClick={() => loading()} >
                            {
                                context.load ? <CircularProgress color='light' /> : title
                            }
                    </Button>
                </ProductDetails>
            </Wrap>
        </Container>
    )
}



const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    margin-top: 120px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

const Wrap = styled.div`
    width: 80%;
    background-color: white;
    display: flex;
    flex-direction: row;
    box-shadow: rgb(51 59 75 / 5%) 0px 16px 40px 0px;
    border: 1px solid rgb(245, 248, 251);
    border-radius: 16px;
    
    @media (max-width : 1050px){
        flex-direction: column;
    }
`;

const ProductImage = styled.div`
    width: 50%;
    flex: 1;
    @media (max-width : 1050px){
        width: 100%;
    }
    > img {
        height: 100%;
        width: 100%;
        border-radius: 0 16px 16px 0;
        @media (max-width : 1050px){
         border-radius: 16px 16px 0 0;
    }
    }
`;


const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
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

const ProductPrice = styled.div`
    margin-top: 20px;
    color: white;
    width: 80%;
    height: 60px;
    padding: 16px 32px;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 6%) 0px 4px 8px 0px;
    background-image: linear-gradient(to left, rgb(115, 47, 216), rgb(109, 59, 184));
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > label {
        font-size: 17px;
        font-weight: 100;
    }
`

const Price = styled.h3`
    font-size: 23px;
    font-weight: 100;

    > label {
        font-size: 15px;
    }
`
const ProductSelectDesc = styled.div`
    width: 80%;
    margin-top: 20px;
    box-shadow: rgb(51 59 75 / 5%) 0px 16px 40px 0px;
    border: 1px solid rgb(245, 248, 251);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 200px;
    padding: 5px;
    
`
const ProductSelect = styled.div`

    /* margin-top: 20px; */
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
    }

`

const ProductDescription = styled.div`

    margin-top: 30px;

    > p {
        font-size: 17px;
        text-align: right;
        padding: 0px 10px;
        @media (max-width : 1050px){
            font-size : 13px;
        }
    }

    ul > li {
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        color: #7b868a;
        @media (max-width : 1050px){
            font-size : 11px;
        }
    }

`

const Selected = styled.span`

     &:last-child {
        flex: 1;
        background-color: ${props => props.show ? 'rgb(32, 136, 255)' : 'white' };
        border-radius: 8px;
        color: ${props => props.show ? 'rgb(255, 255, 255)' : 'black' } ;
        margin: 4px;
        text-align: center;
        cursor: pointer;
        padding: 10px 0;
        
    }

    &:first-child {
        flex: 1;
        background-color: ${props => props.show ? 'white' : 'rgb(32, 136, 255)' };
        border-radius: 8px;
        color: ${props => props.show ? 'black' : 'rgb(255, 255, 255)' } ;
        margin: 4px;
        cursor: pointer;
        text-align: center;
        padding: 10px 0;
        
    }

`;

const Button = styled.button`

    border-radius: 4px;
    color: rgb(255, 255, 255);
    width: 80%;
    padding: 8px;
    font-size: 1.6rem;
    /* margin-top: 30px; */
    cursor: pointer;
    outline: 0;
    border: none;
    background-color: rgb(33, 179, 134);
    font-family: 'Iran Yekan';
    transition: ease-out 0.5s ;
    margin-top: 80px;
    margin-bottom: 20px;x

    @media (max-width : 1050px){
       margin-top: 45px;
       margin-bottom: 15px;
    }
    &:hover {
        background-color: rgb(80, 179, 160);
    }
`
export default Product;
