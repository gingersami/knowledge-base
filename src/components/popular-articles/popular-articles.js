import React, {Component} from 'react';
import Article from "../article/article";

class PopularArticles extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='popular-articles'>
                <Article/>
            </div>
        );
    }
}


export default PopularArticles;
