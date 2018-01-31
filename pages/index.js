import React from 'react';

import Layout from '../components/Layout';
import Frame from '../components/Frame';

class Index extends React.Component {
    state = {
        name: 'index',
        message: 'i am index',
    }
    render(){
        let { name, message } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <div>{message}</div>
                </Frame>
            </Layout>
        )
    }
}

export default Index;