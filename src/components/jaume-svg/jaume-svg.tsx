import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'jaume-svg',
  styleUrl: './jaume-svg.css',
  scoped: true,
})
export class JaumeSvg {
  @Prop({ mutable: true }) svg: string;
  @Prop() name: string;
  @Prop() color = 'primary';

  setColor() {
    this.svg = this.svg.replace(/<svg/, `<svg style="fill:var(--${this.color});"`);
  }

  connectedCallback() {
    this.setColor();
  }

  render() {
    return <Host innerHTML={this.svg}></Host>;
  }
}
