import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';
import { getData,getSidebarDate } from '../../api/getData';

class Child extends React.Component {
    state = {
        name: 'child',
        message: 'i am child',
        linkType: 'child',
    }
    static async getInitialProps(){
        const response = await getSidebarDate();
        console.log(response);
        console.log('--- this ---');
        console.log(this);
        return {linkTypeArr: response};
    }
    render(){
        let { name,message,linkType } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <Children message={message} linkType={linkType}>
                        <div>
                            <h2>child page !</h2>
                            <ul>
                                {this.props.linkTypeArr.map(type =>
                                    <li>{type.type}</li>
                                )}
                            </ul>
                            <button onClick={() => {console.log(this)}}>click get this</button>
                        </div>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

export default Child;