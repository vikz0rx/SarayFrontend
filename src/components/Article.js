import React from 'react';
import { connect } from 'react-redux';

import { getArticle } from '../actions/articleActions';
import MagazingContainer from '../containers/MagazineContainer';
import Text from '../assets/Text';

class Article extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getArticleAction(this.props.match.params.id);
    }

    render() {
        const { article } = this.props

        return (
            <MagazingContainer>
                <div style={{backgroundImage: `url(${article.list.image})`}} className='magazineContainer--cover' />
                <div className='magazineContainer--content'>
                    <Text selector='H2' mt='40px' mb='10px' extrabold uppercase center black>{article.list.title}</Text>
                    <Text selector='H3' mb='10px' extrabold uppercase center darkgrey>{article.list.author_name}</Text>
                    <Text selector='P' mb='20px' thin black>{article.list.text}</Text>
                </div>
            </MagazingContainer>
        )
    }
}

const mapStateToProps = store => {
    return {
        article: store.article,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticleAction: (id) => dispatch(getArticle(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Article);