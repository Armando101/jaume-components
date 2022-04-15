import { Component, h } from '@stencil/core';

@Component({
  tag: 'jaume-header',
  styleUrl: './jaume-header.css',
  shadow: true,
})
export class JaumeHeader {
  render() {
    return (
      <header class="header">
        <jaume-logo></jaume-logo>
        <jaume-button></jaume-button>
      </header>
    );
  }
}
