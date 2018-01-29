import React from 'react';
import Link from 'next/link';

export default class extends React.Component {

    render() {
        return (
            <div>
                <h2>hello next.js !</h2>
                <Link href="/one"><a>to one</a></Link>
                <hr/>
                <Link href="/two"><a>to two</a></Link>
            </div>
        )
    }
}