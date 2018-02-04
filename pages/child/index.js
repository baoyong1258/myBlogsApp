import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';
import { getData,getSidebarDate } from '../../api/getData';
import Router from 'next/router';

// redux
import { bindActionCreators } from 'redux'
import { initStore, changeOpenClock, OpenInit, replaceClick } from '../../store2'
import withRedux from 'next-redux-wrapper'


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
        if(obj.res){
            let dataList = [
                {
                    title: 'child',
                    children: [
                        {
                            title: 'index',
                            children: [],
                            url: '/child',
                            as: '/child'
                        },
                        {
                            title: 'demo',
                            children: [],
                            url: '/child?type=child&children=demo',
                            as: '/child/demo'
                        }
                    ],
                    open: false,
                },
                {
                    title: 'git',
                    children: [
                        {
                            title: 'git的概述',
                            children: [],
                            url: '/child?type=git',
                            as: '/git'
                        },{
                            title: 'git基础',
                            children: [],
                            url: '/git/basics',
                            as: '/git/basics'
                        },{
                            title: 'git原理',
                            children: [],
                            url: '/git/theory',
                        }
                    ],
                    open: false,
                }
            ];
            obj.store.dispatch(replaceClick(dataList))
        }
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
                        <div>child page !</div>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeOpenClock: bindActionCreators(changeOpenClock, dispatch),
        OpenInit: bindActionCreators(OpenInit, dispatch),
        replaceClick: bindActionCreators(replaceClick, dispatch),
    }
}

export default withRedux(initStore, null, mapDispatchToProps)(Child)