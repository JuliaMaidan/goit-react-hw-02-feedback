import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

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

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}