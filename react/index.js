import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button.js";
import { html } from "./html.js";

const App = () => {
    return html`
        <main>
            <${Button} />
        </main>
    `;
}

const root = document.querySelector("#app");
ReactDOM.render(html`<${App} />`, root)
