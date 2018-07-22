import React, { Component } from "react";

/**
 * Class for App Title Component
 * based on the h2 tag
 */
class AppTitle extends Component {

    render() {
        return(
            <h2>{ this.props.name }</h2>
        );
    }

}

export default AppTitle;