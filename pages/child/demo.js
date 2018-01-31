import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';

class ChildDemo extends React.Component {
    state = {
        name: 'child/demo',
        message: 'i am child/demo',
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

export default ChildDemo;