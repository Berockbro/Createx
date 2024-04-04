import React, { Component } from 'react'

type MenuItem = {
    name: string;
    src: string;
}

type Props = {
    mas: MenuItem[];
}

type State = {}

export default class LinksMenu extends Component<Props, State> {
    state = {}

    render() {
        const { mas } = this.props;

        return (
            <ul>
                {mas.map((menuItem, index) => (
                    <li key={index}>
                        <a href={menuItem.src}>{menuItem.name}</a>
                    </li>
                ))}
            </ul>
        )
    }
}
