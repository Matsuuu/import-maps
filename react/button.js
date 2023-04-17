import React from "react";
import { html } from "./html.js";

export class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return html`
            <p>${this.state.count}</p>
            <button onClick=${() => this.increment()}>
                +1 please
            </button>
        `
    }
}
