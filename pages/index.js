import React from 'react';
import Link from 'next/link';
import Button from 'material-ui/Button';
// import '../static/fonts.css';

export default class extends React.Component {

    render() {
        return (
            <div>
                {/*<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>*/}
                <h2>hello next.js !</h2>
                <Link href="/one"><a>to one</a></Link>
                <hr/>
                <Link href="/two"><a>to two</a></Link>
                <hr/>
                <Link href="/reboot"><a>reboot</a></Link>
                <hr/>
                <Link href="/color"><a>color</a></Link>
                <hr/>
                <Link href="/icon"><a>icon</a></Link>
                <hr/>
                <Link href="/page"><a>page</a></Link>
                <hr/>
                <Link href="/page2"><a>page2</a></Link>
                <hr/>
                <Button raised color="primary">Button</Button>
            </div>
        )
    }
}