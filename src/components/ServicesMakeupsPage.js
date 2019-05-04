import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { getMakeups } from '../actions/makeupsActions';
import PrimaryContainer from '../containers/PrimaryContainer';
import Text from '../assets/Text';

class ServiceMakeupsPage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getMakeupsAction()
    }

    render() {
        const { makeups } = this.props

        return (
            <>
                <PrimaryContainer nav='Services'>
                    <Text selector='H3' mb='10px' medium black>Стилисты и визажисты</Text>
                    <Text selector='P' mb='20px' thin black>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития.</Text>
                    <div className='grid grid__md'>
                        {
                            makeups.list.map((item) => (
                                <div className='servicesCard' key={item.id}>
                                    <Link to={'makeup/' + item.id}>
                                        <img src={item.image} className='servicesCard--image' />
                                    </Link>
                                    <Text selector='H6' mt='10px' mb='5px' medium black>{item.firstname} {item.lastname}</Text>
                                    {item.is_staff ? <Text selector='P' mt='5px' thin black>Штатный работник</Text> : <Text selector='P' mt='5px' thin black>* Работник не является сотрудником фотостудии и администрация не несет ответственности за работу</Text> }
                                    <a href={item.instagram} target='_blank' className='servicesCard--link'>@{(item.instagram).replace('https://www.instagram.com/','').slice(0, -1)}</a>
                                </div>
                            ))
                        }
                    </div>
                </PrimaryContainer>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        makeups: store.makeups,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMakeupsAction: () => dispatch(getMakeups()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceMakeupsPage);