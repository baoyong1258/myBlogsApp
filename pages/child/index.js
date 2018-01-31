import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';

class Child extends React.Component {
    state = {
        name: 'child',
        message: 'i am child',
    }
    render(){
        let { name,message } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <div>{message}</div>
                </Frame>
            </Layout>
        )
    }
}

export default Child;