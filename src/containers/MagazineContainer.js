import React from 'react';

import FloatNav from './FloatNav';

const MagazineContainer = (props) => (
    <section className='magazineContainer'>
        <FloatNav />

        {props.children}
    </section>
)

export default MagazineContainer;