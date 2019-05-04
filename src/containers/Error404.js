import React from 'react';
import { Link } from 'react-router-dom'

import FloatNav from './FloatNav';

const Error404 = () => (
    <section className='error404'>
        <FloatNav />

        <span className='error404--code'>404</span>
        <p className='error404--info'>Страница не найдена</p>
        <Link to='/' className='error404--link'>Вернуться на главную страницу</Link>
    </section>
)

export default Error404;