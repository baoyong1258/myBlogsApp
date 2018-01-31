import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';

class Post extends React.Component {
    render(){

        return (
            <Layout title="post">
                <Frame>
                    <div>i am post</div>
                </Frame>
            </Layout>
        )
    }
}

export default Post;