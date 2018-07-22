import React, { Component } from "react";

/**
 * Class for Title Components in the app
 * based on the h2 tag
 */
class Title extends Component {

    render() {
        return(
            <h2>{ this.props.name }</h2>
        );
    }

}

export default Title;