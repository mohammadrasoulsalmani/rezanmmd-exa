import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar';


function Comment() {
    return (
        <View>
            <LastComment>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>بازدیدکننده</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
                <div>
                    <CommentPm>ظاهرا که‌ دوره خوبیه !</CommentPm>
                    <div>
                        <p>۱۸ خرداد ۱۴۰۰ </p>
                        <p>علیرضا احدی</p>
                        <p>خریدار</p>
                    </div>
                </div>
            </LastComment>
        </View>
    )
}

const View = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LastComment = styled.div`

    width: 80%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    div {
        display: flex;
        flex-direction: column;
        font-size: 10px;
        font-weight: 450;
        border-bottom: 1px solid gray;
        margin-top: 20px;


        div {
            display: flex;
            flex-direction: row;


        p {
            padding: 10px 0px 20px 20px;
            color: #a1a3a8;
        }

        
        }
    }

    p:last-child {
        height: 30px;
        background-color: #f0f0f1;
        color: #81858b;
        border-radius: 10px;
        display: flex;
        padding: 10px;
        font-weight: 600;
        justify-content: center;
    }
    

`

const CommentPm = styled.p`
    font-size: 15px;
    font-weight: 450;

`


export default Comment
