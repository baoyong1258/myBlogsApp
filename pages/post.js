import React from 'react';

class Post extends React.Component {
    state = {

    };

    render(){
        console.log(this.props);
        return (
            <div>
               <h1>{this.props.url.query.title}</h1>
               <p>This is the blog post content.</p>
            </div>
        )
    }

}

export default Post;