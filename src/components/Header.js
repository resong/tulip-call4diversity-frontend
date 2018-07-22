import React, { Component } from "react";

/**
 * Class for Header Components in the app
 */
class Header extends Component {

    render() {
        return (
            <header>
                { this.props.children }
            </header>
        );
    }

}

export default Header;