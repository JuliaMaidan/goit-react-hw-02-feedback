import React, { Component } from 'react';

export class Section extends Component {
    render() {
        const { title, children } = this.props
    return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
    }
}