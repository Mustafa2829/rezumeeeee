import React from 'react';
import "./AbboutMe.css";



const AbboutMe = () => {
    return (
        <div className='baty' style={{ backgroundColor: '', height: "1000px", width: "100%" }}>
            <div className='box'> Всем привет, меня зовут Магометов Мустафа, и я начинающий front-end разработчик. Мне 18 лет живу в Кыргызстане городе Бишкек
                Почему я пришёл к этому ?
                <img className='img1' src="https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRgbGk9dI5tNcXn_eu_jy96A&dpr=2" alt="" height={400} width="400px" />
                <div className='text2'></div>
                Ответ прост: посоветовали друзья и на удивления мне это очень понравилось, и я решил развивается в этой сфере.</div>
            <div className="text">
                <p>
                    Меня зовут Магометов Мустафа , отучился на программиста , имею
                    диплом от Makers


                    Прошел стажировку в компании Google и Facebook. Имею 10 летний стаж
                    в программировании. Знаю языки JavaScript , Java , Python , S++ и
                    другие многие

                    <p />Ищю работу с причиной сокращения штаба связи с коронавирусом</p>
            </div>
            <section id="skils" className="section section_color">
                <h2 className="section_title">Skill Work</h2>
                <div className="text">
                    <h4>В спектр моих услуг входит</h4>
                    <ul>
                        <li> Верстка макетов</li>
                        <li>Нахождение ошибок</li>
                        <li> Создание сайтов</li>
                        <li>Создание приложений </li>
                        <li>Бесперебойную работу установленных программ</li>
                        <li>Безопасную работу пользователя в сети Интернет</li>
                        <li>Полное восстановление работы компьютера после вируса</li>
                    </ul>
                </div>
            </section>


        </div>
    );
};

export default AbboutMe;



