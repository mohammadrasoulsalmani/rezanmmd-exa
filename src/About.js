import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <Veiw>
            <div>
            <h2>مدت زمان دوره:</h2>
            <h4>۱۸۰ دقیقه</h4>
            <h4>در قالب ۵ فایل آموزشی</h4>
            &nbsp;
            <h2>معرفی دوره</h2>
            <p>
                در این دوره به بررسی پروژه&zwnj;ها و مبانی بلاکچین و ارزهای دیجیتال از نگاهی تخصصی و حرفه ای پرداخته می&zwnj;شود همچنین مبانی سرمایه گذاری تخصصی و بنیادی در ارزهای دیجیتال بررسی می گردد.

            </p>
            <h2>سر فصل مطالب</h2>
            <strong>ارزهای دیجیتال (Crypto Currencies):</strong>
            <ul>
                <li>مبانی ارزیابی فنی پروژه&zwnj;ها</li>
                <li>دسته بندی ارزهای دیجیتال بر اساس کاربرد</li>
                <li>بررسی تخصصی پروژه ها
            <ul>
                <li>ایاس (EOS)</li>
                <li>یونی سواپ (UNI)</li>
                <li>چین لینک (LINK)</li>
                <li>انتولوژی (ONT)</li>
                <li>الراند (EGLD)</li>
                <li>انجین (ٍENJ)</li>
                <li>اسکیل (SKL)</li>
                <li>لوپرینگ (LRC)</li>
                <li>بلنسر (BAL)</li>
                <li>نییر (NEAR)</li>
                <li>تکنولوژی تنگل (IOTA)</li>
                <li>تکنولوژی هش گراف (HBAR)</li>
            </ul>
            </li>
            </ul>
            <strong>گاورننس توکن (Governance Tokens)</strong>

            <strong>ان اف تی توکن (NFT Tokens)</strong>

            <strong>مبانی طراحی و توسعه قراردادهای هوشمند</strong>

            <strong>بررسی استیکینگ (Staking) و ییلد فارمینگ (Yield Farming)</strong>

            <strong>بررسی پروژهای کلاهبرداری</strong>

            <strong>بررسی چین انالیز (Chain Analysis)</strong>

            <strong>بایدها و نبایدهای بازار ارز دیجیتال</strong>

            &nbsp;
            <h2>معرفی استاد :</h2>
            <strong>رضا نورمحمدی دانشجوی دکترا و پروژهشگر و کارشناس حوزه هوش مصنوعی و بلاکچین با بیش از 6 سال سابقه در حوزه فن&zwnj;آوری بلاکچین و تجربه حضور به عنوان طراح , مجری و مشاور در پروژه های مرتبط</strong>

            &nbsp;
            <h2>چه کسانی می توانند در دوره حضور یابند؟</h2>
            <h4>شرکت در این دوره نیازمند تخصص و مهارت خاصی نبوده و این دوره برای تمامی علاقه مندان به فعالیت در حوزه بلاکچین و رمز ارزها مناسب است.</h4>
            </div>
        </Veiw>
    )
}


const Veiw = styled.div`

    padding: 50px;
    h2 {
        font-size: 24px;
        /* margin-top: 20px; */
        line-height: 60px;
        font-weight: 400;
    }
    h4 {
        font-size: 18px;
        font-weight: 35000;
    }

    p {
        font-size: 18px;
        font-weight: 250;
    }

    strong {
        font-size: 16px;
        font-family: 'Iran Yekan' , sans-serif;
        /* margin-top: 10px; */
        font-weight: 400;
    }
    li {
        list-style: none;
        font-size: 15px;
        font-family: 'Iran Yekan' , sans-serif;
        padding: 5px 0;
        font-weight: 500;
    }
    
`
export default About
