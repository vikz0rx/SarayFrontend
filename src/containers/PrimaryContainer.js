import React from 'react';
import { Link } from 'react-router-dom'

import FloatNav from './FloatNav';

const NavHome = () => (
    <>
        <Link to='/' className='primaryNavList--link primaryNavList--link__primary'>Новости</Link>
    </>
)


const NavInfo = () => (
    <>
        <Link to='/info' className='primaryNavList--link primaryNavList--link__primary'>Оборудование</Link>
        <Link to='/info/rules' className='primaryNavList--link primaryNavList--link__primary'>Правила студии</Link>
        <a href='https://geekbrains.ru/oferta.pdf' target='_blank' className='primaryNavList--link primaryNavList--link__primary'>Договор</a>
    </>
)

const NavServices = () => (
    <>
        <Link to='/services' className='primaryNavList--link primaryNavList--link__primary'>Фотографы</Link>
        <Link to='/makeup' className='primaryNavList--link primaryNavList--link__primary'>Стилисты и визажисты</Link>
        <Link to='/print' className='primaryNavList--link primaryNavList--link__primary'>Печать</Link>
    </>
)

const NavContacts = () => (
    <>
        <Link to='/contacts' className='primaryNavList--link primaryNavList--link__primary'>Контакты</Link>
    </>
)

const PrimaryContainer = (props) => (
    <section className='primaryContainer'>
        <FloatNav />

        <video className='videoContainer--video' loop autoPlay playsInline muted>
            <source src='https://drive.google.com/uc?export=download&id=1Hb1ZjZCPQCwwpxKftx5vD-t50AdyoOZw' type='video/webm' />
            <source src='http://138.197.173.132:8000/static/background.mp4' type='video/mp4' />
        </video>

        <div className='videoContainer'>
            <video className='videoContainer--video' loop autoPlay playsInline muted>
                <source src='https://drive.google.com/uc?export=download&id=1Hb1ZjZCPQCwwpxKftx5vD-t50AdyoOZw' type='video/webm' />
                <source src='http://138.197.173.132:8000/static/background.mp4' type='video/mp4' />
            </video>
            <div className='videoContainer--info'>
                <div className='logo logo__lg'>
                    <span className='logo--title'>SARAY</span>
                    <span className='logo--subtitle'>PHOTOSTUDIO</span>
                </div>
            </div>
        </div>
        <div id='scrollAnchor' className='scrollContainer'>
            <div className='scrollContainer--brand'>
                <div className='logo logo__sm'>
                    <span className='logo--title'>SARAY</span>
                    <span className='logo--subtitle'>PHOTOSTUDIO</span>
                </div>
            </div>
            <nav className='primaryNav'>
                <div className='primaryNavList'>
                    { props.nav === 'Info' ? <NavInfo /> : props.nav === 'Services' ? <NavServices /> : props.nav === 'Contacts' ? <NavContacts /> : props.nav === 'Home' ? <NavHome /> : null }
                </div>
                <div className='primaryNavList'>
                    <a href='tel:89999991337' className='primaryNavList--link primaryNavList--link__secondary'>+7 (999) 999-13-37</a>
                    <a href='https://vk.com' target='_blank' className='primaryNavList--link primaryNavList--link__secondary'>VK</a>
                    <a href='https://instagram.com' target='_blank' className='primaryNavList--link primaryNavList--link__secondary'>INSTAGRAM</a>
                </div>
            </nav>
            {props.children}
        </div>
    </section>
)

export default PrimaryContainer;