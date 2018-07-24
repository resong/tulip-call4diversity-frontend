import React, { Component } from "react";

/**
 * Class for App EventsContainer Component
 */
class EventsContainer extends Component {

    render() {
        return (
            <section>
                { this.props.children }
            </section>
        );
    }

}

export default EventsContainer;