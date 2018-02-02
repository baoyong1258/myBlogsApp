import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';

class Git extends React.Component {
    state = {
        name: 'git的概述',
        message: 'git是代码管理工具',
        linkType: 'git',
    }
    render(){
        let { name,message,linkType } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <Children message={message} linkType={linkType}>
                        <div>
                            <h3>作用</h3>
                            <p>git的代码版本管理工具</p>
                        </div>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

export default Git;