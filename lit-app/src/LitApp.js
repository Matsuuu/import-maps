import { LitElement, html, css } from 'lit';
import LitAppStyles from "./lit-app-styles.css" assert { type: "css" };

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class LitApp extends LitElement {
    static get properties() {
        return {
            title: { type: String },
        };
    }

    static get styles() {
        return [LitAppStyles];
    }

    constructor() {
        super();
        this.title = 'My app';
    }

    render() {
        return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/LitApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
    }
}
