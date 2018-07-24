import React, { Component } from "react";

/**
 * Class for Event Components in the app
 */
class Event extends Component {
    
    render() {
        return(
            <article>{ this.props.children }</article>
        );
    }

}

export default Event;