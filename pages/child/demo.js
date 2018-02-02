import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';

class ChildDemo extends React.Component {
    state = {
        name: 'child/demo',
        message: 'i am child/demo',
        linkType: 'child',
    }
    render(){
        let { name,message,linkType } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <Children message={message} linkType={linkType}>
                        <div>
                            <h2>i am child/demo page!</h2>
                        </div>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

export default ChildDemo;