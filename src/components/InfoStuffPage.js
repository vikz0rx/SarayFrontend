import React from 'react';
import { connect } from 'react-redux';

import { getStuff } from '../actions/stuffActions';
import PrimaryContainer from '../containers/PrimaryContainer';
import Text from '../assets/Text';

class InfoStuffPage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getStuffAction()
    }

    render() {
        const { stuff } = this.props

        return (
            <>
                <PrimaryContainer nav='Info'>
                    <Text selector='H3' mb='10px' medium black>Оборудование</Text>
                    <Text selector='P' mb='20px' thin black>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития. Таким образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации форм развития.</Text>
                    <div className='grid grid__xs'>
                        {
                            stuff.list.map((item) => (
                                <div className='stuffCard' key={item.id}>
                                    <img src={item.image} className='stuffCard--image' />
                                    <Text selector='H6' mt='10px' mb='5px' medium black>{item.name}</Text>
                                    <Text selector='P' thin black>{item.description}</Text>
                                    { item.rent_cost !== 0 ? <Text selector='P' light black>{item.rent_cost} ₽/час</Text> : null }
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
        stuff: store.stuff,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getStuffAction: () => dispatch(getStuff()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoStuffPage);