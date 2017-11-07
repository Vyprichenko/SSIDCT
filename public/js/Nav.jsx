import React from 'react';

export default function Nav(props) {
    const { things } = props;
    return (
        <nav>
            <ol>
                {
                    things.map((thing) => (
                        <li key={`${thing.identifier}_link`}>
                            <a href={'#' + thing.identifier}>{thing.name}</a>
                        </li>
                    ))
                }
            </ol>
        </nav>
    );
}