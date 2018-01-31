import Layout from '../components/Layout';
import Frame from '../components/Frame';
import React from 'react';

import Index from '../components/Router/index';
import First from '../components/Router/first';
import Checkout from '../components/Checkout/index';

const Child = () => {
    let search = location.search;
    let type = search.slice(1).split('=')[1];
    console.log(type);
    if(type === 'first'){
        return <First></First>
    }else if(type === 'checkout'){
        return <Checkout></Checkout>
    }else{
        return <Index></Index>
    }
}

class Router extends React.Component {

    componentDidMount() {
        console.log('--- router component ---');
    }

    render(){
        return (
            <Layout>
                <Frame>
                    <Child></Child>
                </Frame>
            </Layout>
        )
    }
}

export default Router;