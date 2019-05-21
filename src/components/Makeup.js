import React from 'react';
import { connect } from 'react-redux';

import { getMakeup } from '../actions/makeupActions';
import MagazingContainer from '../containers/MagazineContainer';
import Text from '../assets/Text';

class Makeup extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getMakeupAction(this.props.match.params.id);
    }

    render() {
        const { makeup } = this.props

        return (
            <MagazingContainer>
                <div style={{backgroundImage: `url(${makeup.list.image})`}} className='magazineContainer--cover' />
                <div className='magazineContainer--content'>
                    <Text selector='H2' mt='40px' mb='10px' extrabold uppercase center black>{makeup.list.firstname} {makeup.list.lastname}</Text>
                    { makeup.list.is_staff ? <Text selector='H3' mb='10px' extrabold uppercase center darkgrey>Штатный работник</Text> : null }
                    <Text selector='P' mb='20px' center thin black>{makeup.list.bio}</Text>
                    <div className='grid grid__md'>
                        {
                            makeup.list.photos_set ?
                            makeup.list.photos_set.map((item, index) => (
                                <div style={{backgroundImage: `url(${item.image})`}} key={index} className='magazineContainer--imageContainer' />
                            ))
                            : null
                        }
                    </div>
                </div>
            </MagazingContainer>
        )
    }
}

const mapStateToProps = store => {
    return {
        makeup: store.makeup,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMakeupAction: (id) => dispatch(getMakeup(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Makeup);