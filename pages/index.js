import React from 'react';
import Link from 'next/link';
import Button from 'material-ui/Button';

export default class extends React.Component {

    render() {
        return (
            <div>
                <h2>hello next.js !</h2>
                <Link href="/one"><a>to one</a></Link>
                <hr/>
                <Link href="/two"><a>to two</a></Link>
                <hr/>
                <Button raised color="primary">Button</Button>
            </div>
        )
    }
}