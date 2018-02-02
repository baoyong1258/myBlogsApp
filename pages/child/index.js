import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';

class Child extends React.Component {
    state = {
        name: 'child',
        message: 'i am child',
        linkType: 'child',
    }
    render(){
        let { name,message,linkType } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <Children message={message} linkType={linkType}>
                        <div>
                            <h2>child page !</h2>
                        </div>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

export default Child;