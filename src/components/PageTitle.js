import React, { Component } from "react";

/**
 * Class for PageTitle Component
 * based on the h2 tag
 */
class PageTitle extends Component {

    render() {
        return(
            <h2>{ this.props.name }</h2>
        );
    }

}

export default PageTitle;