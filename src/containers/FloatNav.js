import React from 'react';
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faInfo, faUsers, faCameraRetro, faMapMarkerAlt, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes, faInfo, faUsers, faCameraRetro, faMapMarkerAlt, faHome, faUser);

class FloatNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        }

        this.handleNavToggle = this.handleNavToggle.bind(this);
    }

    handleNavToggle() {
        this.setState(state => {
            return {
                active: !state.active,
            }
        });
    }

    render() {
        return (
            <div className={!this.state.active ? 'floatNav' : 'floatNav floatNav__active' }>
                <div className='floatNavAction' onClick={this.handleNavToggle}>
                    {!this.state.active ? <FontAwesomeIcon icon='bars' size='sm' /> : <FontAwesomeIcon icon='times' size='sm' /> }
                </div>
                <div className='floatNavList floatNavList__horizontal'>
                    <Link to='/info'>
                        <div className='floatNavList--link'>
                            <FontAwesomeIcon icon='info' size='xs' />
                        </div>
                    </Link>
                    <Link to='/services'>
                        <div className='floatNavList--link'>
                            <FontAwesomeIcon icon='users' size='xs' />
                        </div>
                    </Link>
                    <Link to='/bookings'>
                        <div className='floatNavList--link'>
                            <FontAwesomeIcon icon='camera-retro' size='xs' />
                        </div>
                    </Link>
                    <Link to='/contacts'>
                        <div className='floatNavList--link'>
                            <FontAwesomeIcon icon='map-marker-alt' size='xs' />
                        </div>
                    </Link>
                </div>
                <div className='floatNavList floatNavList__vertical'>
                    <Link to='/'>
                        <div className='floatNavList--link'>
                            <FontAwesomeIcon icon='home' size='xs' />
                        </div>
                    </Link>
                    <Link to='/signin'>
                        <div className='floatNavList--link'>
                            <FontAwesomeIcon icon='user' size='xs' />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FloatNav;