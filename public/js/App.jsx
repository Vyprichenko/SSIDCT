import React from 'react';
import Test from './Test';
import Nav from './Nav';

export default function App(props) {
    const { things } = props;

    return (
        <div>
            <Nav things={things} />
            <div>
                {
                    things.map((thing, i) => <Test key={thing.identifier} test={thing} />)
                }
            </div>
        </div>
    );
}