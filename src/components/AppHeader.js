import React, { Component } from "react";

/**
 * Class for App Header Component
 */
class AppHeader extends Component {

    render() {
        return (
            <header>
                { this.props.children }
            </header>
        );
    }

}

export default AppHeader;