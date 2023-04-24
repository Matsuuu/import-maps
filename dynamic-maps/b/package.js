export class TurkuFrontend extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.innerHTML = `
            <h2>Aurajoki ❤️verflow</h2>
        `;
    }
}

if (!customElements.get("turku-frontend")) {
    customElements.define("turku-frontend", TurkuFrontend);
}
