import React from 'react';
import { Link } from 'react-router-dom'

import FloatNav from '../containers/FloatNav';

class SignInRecovery extends React.Component {
    constructor () {
        super();
        
        this.state = {
            email: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <section className='fullScreenContainer'>
                <FloatNav />

                <video className='videoContainer--video' loop autoPlay playsInline muted>
                    <source src='https://drive.google.com/uc?export=download&id=1Hb1ZjZCPQCwwpxKftx5vD-t50AdyoOZw' type='video/webm' />
                    <source src='http://138.197.173.132:8000/static/background.mp4' type='video/mp4' />
                </video>

                <div className='loginContainer'>
                    <div className='logo logo__md'>
                        <span className='logo--title'>SARAY</span>
                        <span className='logo--subtitle'>PHOTOSTUDIO</span>
                    </div>
                    <form className='loginForm'>
                        <label htmlFor='email' className='loginForm--label'>Электронная почта</label>
                        <input type='email' id='email' name='email' className='loginForm--input' onChange={this.handleChange} value={this.state.email} required />

                        <Link to='/signin' className='loginForm--link'>Войти в личный кабинет</Link>
                        <Link to='/signup' className='loginForm--link'>Еще не зарегистрированы?</Link>

                        <input type='submit' className='loginForm--submit' value='Продолжить' />
                    </form>
                </div>
            </section>
        )
    }
}

export default SignInRecovery;