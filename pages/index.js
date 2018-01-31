import React from 'react';
import Layout from '../components/Layout';
import Frame from '../components/Frame';

class Index extends React.Component {
    render(){

        return (
            <Layout title="post">
                <Frame>
                    <div>i am index</div>
                </Frame>
            </Layout>
        )
    }
}

export default Index;