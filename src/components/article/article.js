import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state ={posts:['hello','hard', 'coded', 'is hard', 'coded']};
    }

    render() {
        const posts = this.state.posts.map((post,idx)=>{
            return <p className='popular-article' key={post[idx]}>{post}</p>
        })
        return (

            <div>
                <h2>Most Popular Articles</h2>
                {posts}
            </div>
        );
    }
}

Article.propTypes = {};

export default Article;
