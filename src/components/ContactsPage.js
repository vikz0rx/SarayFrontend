import React from 'react';

import PrimaryContainer from '../containers/PrimaryContainer';
import Text from '../assets/Text';

class ContactsPage extends React.Component {
    render() {
        return (
            <>
                <PrimaryContainer nav='Contacts'>
                    <Text selector='H3' mb='10px' medium black>Контакты</Text>
                    <Text selector='P' mb='20px' thin black>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития.</Text>

                    <Text selector='P' medium black>Бронирование по телефону:</Text>
                    <Text selector='P' thin black>09:00 до 21:00 (без выходных)</Text>
                    <Text selector='P' medium black>Бронирование на сайте:</Text>
                    <Text selector='P' mb='20px' thin black>00:00 до 24:00 (без выходных)</Text>

                    <Text selector='P' medium black>Номера телефонов:</Text>
                    <a href='tel:' className='scrollContainer--link'>
                        <Text selector='P' thin black>+7 (999) 999-13-37</Text>
                    </a>
                    <a href='tel:' className='scrollContainer--link'>
                        <Text selector='P' mb='15px' thin black>+7 (999) 999-13-12</Text>
                    </a>
                    <Text selector='P' medium black>Электронная почта:</Text>
                    <a href='mailto:' className='scrollContainer--link'>
                        <Text selector='P' mb='15px' thin black>mail@saray.studio</Text>
                    </a>
                    <Text selector='P' medium black>Наш адрес:</Text>
                    <a href='https://2gis.ru/tyumen' className='scrollContainer--link'>
                        <Text selector='P' mb='15px' thin black>г. Тюмень, Хохрякова 8</Text>
                    </a>

                    <iframe
                        src='https://yandex.ru/map-widget/v1/?um=constructor%3A7ba39f18bc25d3157f4a98e39747b0ddb4fdf1434fd2dbd75e47115ba9d76d57&amp;source=constructor'
                        width='100%'
                        height='400'
                        frameborder='0'
                    ></iframe>
                </PrimaryContainer>
            </>
        )
    }
}

export default ContactsPage;