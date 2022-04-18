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
        <jaume-button message="Currículum"></jaume-button>
        <jaume-button message="Currículum" isSecondary={true}></jaume-button>
      </header>
    );
  }
}
