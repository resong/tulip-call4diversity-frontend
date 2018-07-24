import React, { Component } from "react";

/**
 * Class for Criteria Component
 */
class Criteria extends Component {

    render() {
        return (
            <ul>
                { this.props.children }
            </ul>
        );
    }

}

export default Criteria;