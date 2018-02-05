import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';
import { getData,getSidebarDate,addSidebarDate } from '../../api/getData';
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
        dataList: [],
    }
    static async getInitialProps(obj){
        console.log('getInitialProps obj');
        console.log(obj);
        let pathArr = obj.asPath.replace('?','/').split('/').filter(item => !!item);
        console.log('pathArr', pathArr);
        let dataList

        // if(obj.res){
            dataList = await getSidebarDate();
            dataList = dataList.map(item => {
                if(item.title == pathArr[0]){
                    return {
                        ...item,
                        open: true,
                    }
                }else {
                    return item;
                }
            })
            obj.store.dispatch(replaceClick(dataList));
        // }
        return {
            name: pathArr[0],
            message: 'i am ' + pathArr[0],
            linkType: pathArr[0],
            dataList: dataList
        };
    }
    componentDidMount() {
        console.log('--- componentDidMount ---');
        Promise.resolve().then(() => {
            this.setState({dataList: this.props.dataList});
            console.log(this.state);
            console.log(this.props);
        });
    }
    changeDataList(linkType){
        this.setState({
            dataList: this.state.dataList.map(item => {
                if(item.title == linkType){
                    return {
                        ...item,
                        open: !item.open,
                    }
                }else {
                    return {
                        ...item,
                        open: false,
                    };
                }
            })
        })
    }
    addSidebarDate(){
        let newSidebarData = {
            "title": "child",
            "children": [
                {
                    "title": "index",
                    "children": [],
                    "url": "/child",
                    "as": "/child"
                },
                {
                    "title": "demo",
                    "children": [],
                    "url": "/child?type=child&children=demo",
                    "as": "/child/demo"
                }
            ],
            "open": false
        };
        newSidebarData = JSON.stringify(newSidebarData);
        // const newSidebarData = 'test';
        addSidebarDate(newSidebarData).then((res) => {
            console.log('添加sidebar成功');
            console.log(res);
        })
    }
    render(){
        let { name,message,linkType,dataList } = this.props;
        return (
            <Layout title={name}>
                <Frame title={name} dataList={this.state.dataList.length > 0 ? this.state.dataList : dataList} changeDataList={this.changeDataList.bind(this)}>
                    <Children message={message} linkType={linkType}>
                        <Son name={name}></Son>
                        <button onClick={this.addSidebarDate.bind(this)}>save sidebarData</button>
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