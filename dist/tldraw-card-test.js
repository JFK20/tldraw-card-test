import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class TldrawCardTest extends LitElement  {
  setConfig(config) {
    if (!config) {
      console.log('Invalid configuration');
    }
    this.config = { name: 'tldraw', ...config };
  }

  shouldUpdate(changedProps) {
    return !!this.config;
  }

  render() {
    return html`
      <ha-card .header=${this.config.name}>
        <div>Endlich Funktoniert der Test</div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 400px;
        min-height: 400px;
      }
      Tldraw {
        width: 100%;
        height: 100%;
        min-width: 400px;
        min-height: 400px;
      }
      .class-test {
        width: 100%;
        height: 100%;
        min-width: 400px;
        min-height: 400px;
      }
    `;
  }
}

customElements.define('tldraw-card-test', TldrawCardTest);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'tldraw-card-test',
  name: 'tldraw Card-test',
  description: 'A template custom card for you to create something awesome',
});