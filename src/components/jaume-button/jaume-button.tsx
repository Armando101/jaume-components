import { Component, h } from '@stencil/core';

@Component({
  tag: 'jaume-button',
  styleUrl: './jaume-button.css',
  scoped: true,
})
export class JaumeButton {
  render() {
    return <button class="button">Currículum</button>;
  }
}
