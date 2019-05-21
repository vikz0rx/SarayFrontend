import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { getUser } from '../actions/signInActions';
import FloatNav from '../containers/FloatNav';

class SignIn extends React.Component {
    constructor () {
        super();
        
        this.state = {
            email: '',
            password: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit (e) {
        this.props.getUserAction(this.state.email, this.state.password);

        event.preventDefault();
    }

    render() {
        const { user } = this.props

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
                    <form className='loginForm' onSubmit={this.handleSubmit}>
                        <label htmlFor='email' className='loginForm--label'>Электронная почта</label>
                        <input type='email' id='email' name='email' className='loginForm--input' onChange={this.handleChange} value={this.state.email} required />

                        <label htmlFor='password' className='loginForm--label'>Пароль</label>
                        <input type='password' id='password' name='password' className='loginForm--input' onChange={this.handleChange} value={this.state.password} minLength={8} required />

                        <Link to='/recovery' className='loginForm--link'>Восстановить пароль</Link>
                        <Link to='/signup' className='loginForm--link'>Еще не зарегистрированы?</Link>

                        <input type='submit' className='loginForm--submit' value='Продолжить' />
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserAction: (email, password) => dispatch(getUser(email, password)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);