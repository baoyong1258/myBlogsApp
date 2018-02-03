import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';
import { getData,getSidebarDate } from '../../api/getData';
import Router from 'next/router';

Router.onRouteChangeStart = url => {
    console.log('App is changing to: ', url)
    console.dir(Child);

}

function Son({name}) {
    switch (name){
        case 'child':
            return <p>child page !</p>
        case 'git':
            return <p>git page !</p>
        default:
            return <p>default page !</p>
    }
}

class Child extends React.Component {
    state = {
        name: 'child',
        message: 'i am child',
        linkType: 'child',
    }
    static async getInitialProps(obj){
        console.log('--- obj ---');
        console.log(obj);
        console.log(obj.asPath);
        const response = await getSidebarDate();
        // console.log('--- Router ---');
        // console.log(Router);
        let pathArr = obj.asPath.split('/').filter(item => !!item);
        return {
            name: pathArr[0],
            linkTypeArr: response,
        };
    }
    componentDidMount() {
        Promise.resolve().then(() => {console.log(this.state)});
    }
    render(){
        let { message,linkType } = this.state;
        let { name } = this.props;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <Children message={message} linkType={linkType}>
                        <Son name={name}></Son>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

export default Child;