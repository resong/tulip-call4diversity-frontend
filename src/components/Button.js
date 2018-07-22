import React, { Component } from "react";

/**
 * Class for Button Components in the app
 */
class Button extends Component {
    
    render() {
        return(
            <button>{ this.props.name }</button>
        );
    }

}

export default Button;