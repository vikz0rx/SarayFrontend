import React from 'react';
import { connect } from 'react-redux';

import { getRules } from '../actions/rulesActions';
import PrimaryContainer from '../containers/PrimaryContainer';
import Text from '../assets/Text';

class InfoRulesPage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getRulesAction();
    }

    render() {
        const { rules } = this.props

        return (
            <>
                <PrimaryContainer nav='Info'>
                    <Text selector='H3' mb='10px' medium black>Правила студии</Text>
                    <Text selector='P' mb='20px' thin black>
                        {
                            rules.body.split('\n').map((item, index) => (
                                <span>
                                    {item}
                                    <br/>
                                </span>
                            ))
                        }
                    </Text>
                </PrimaryContainer>
            </>
        )
    }
}

const mapStateToProps = store => {
    return {
        rules: store.rules,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRulesAction: () => dispatch(getRules()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoRulesPage);