import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { getNews } from '../actions/newsActions';
import PrimaryContainer from '../containers/PrimaryContainer';
import Text from '../assets/Text';

class HomeNewsPage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getNewsAction()
    }

    render() {
        const { news } = this.props

        return (
            <>
                <PrimaryContainer nav='Home'>
                    <Text selector='H3' mb='10px' medium black>Новости</Text>
                    <Text selector='P' mb='20px' thin black>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития.</Text>
                    <div className='grid grid__md'>
                        {
                            news.list.map((item) => (
                                <div className='servicesCard' key={item.id}>
                                    <Link to={'news/' + item.id}>
                                        <img src={item.image} className='servicesCard--image' />
                                    </Link>
                                    <Text selector='H6' mt='10px' mb='5px' medium black>{item.title}</Text>
                                    <Text selector='P' mt='5px' thin black>{item.author_name}</Text>
                                    <Text selector='P' thin black>{item.created_at}</Text>
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
        news: store.news,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNewsAction: () => dispatch(getNews()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNewsPage);