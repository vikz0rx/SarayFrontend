import React from 'react';
import { connect } from 'react-redux';

import { getPhotograph } from '../actions/photographActions';
import MagazingContainer from '../containers/MagazineContainer';
import Text from '../assets/Text';

class Photograph extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getPhotographAction(this.props.match.params.id);
    }

    render() {
        const { photograph } = this.props

        return (
            <MagazingContainer>
                <div style={{backgroundImage: `url(${photograph.list.image})`}} className='magazineContainer--cover' />
                <div className='magazineContainer--content'>
                    <Text selector='H2' mt='40px' mb='10px' extrabold uppercase center black>{photograph.list.firstname} {photograph.list.lastname}</Text>
                    { photograph.list.is_staff ? <Text selector='H3' mb='10px' extrabold uppercase center darkgrey>Штатный фотограф</Text> : null }
                    <Text selector='P' mb='20px' center thin black>{photograph.list.bio}</Text>
                    <div className='grid grid__lg'>
                        {
                            photograph.list.photos_set ?
                            photograph.list.photos_set.map((item, index) => (
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
        photograph: store.photograph,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotographAction: (id) => dispatch(getPhotograph(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photograph);