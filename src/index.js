import { html, render } from "lighterhtml";

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;

    this.attachShadow({ mode: "open" });

    this.update();
  }

  inc = () => {
    this.count++;
    this.update();
  };

  dec = () => {
    this.count--;
    this.update();
  };

  template() {
    return html`
      <style>
        * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }
      </style>
      <button onclick="${this.dec}">-</button>
      <span>${this.count}</span>
      <button onclick="${this.inc}">+</button>
    `;
  }

  update() {
    render(this.shadowRoot, this.template());
  }
}

customElements.define("my-counter", MyCounter);
