import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { getPhotographs } from '../actions/photographsActions';
import PrimaryContainer from '../containers/PrimaryContainer';
import Text from '../assets/Text';

class ServicePhotographsPage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getPhotographsAction()
    }

    render() {
        const { photographs } = this.props

        return (
            <>
                <PrimaryContainer nav='Services'>
                    <Text selector='H3' mb='10px' medium black>Фотографы</Text>
                    <Text selector='P' mb='20px' thin black>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития.</Text>
                    <div className='grid grid__md'>
                        {
                            photographs.list.map((item) => (
                                <div className='servicesCard' key={item.id}>
                                    <Link to={'photographs/' + item.id}>
                                        <img src={item.image} className='servicesCard--image' />
                                    </Link>
                                    <Text selector='H6' mt='10px' mb='5px' medium black>{item.firstname} {item.lastname}</Text>
                                    {item.is_staff ? <Text selector='P' mt='5px' thin black>Штатный фотограф</Text> : <Text selector='P' mt='5px' thin black>* Фотограф не является сотрудником фотостудии и администрация не несет ответственности за работу</Text> }
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
        photographs: store.photographs,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotographsAction: () => dispatch(getPhotographs()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServicePhotographsPage);