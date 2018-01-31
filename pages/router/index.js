import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';

class router extends React.Component {
    render(){

        return (
            <Layout title="post">
                <Frame>
                    <div>i am router</div>
                </Frame>
            </Layout>
        )
    }
}

export default router;