import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'jaume-logo',
  styleUrl: 'jaume-logo.css',
  shadow: true,
})
export class JaumeLogo {
  @Prop() logo = '/assets/img/logo.svg';
  @Prop() name = 'Logo';
  @Prop() width = 70;
  @Prop() height = 20;

  render() {
    return (
      <Host>
        <img src={this.logo} width={this.width} height={this.height} alt={this.name} />
      </Host>
    );
  }
}
