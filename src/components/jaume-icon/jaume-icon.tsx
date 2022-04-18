import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'jaume-icon',
  styleUrl: './jaume-icon.css',
  scoped: true,
})
export class JaumeIcon {
  @Prop() redirectTo: string;
  @Prop() name: string;
  @Prop() svg: string;
  @Prop() color = 'primary';

  render() {
    return (
      <a class="button-icon " href={this.redirectTo}>
        <jaume-svg name={this.name} svg={this.svg} color={this.color}></jaume-svg>
      </a>
    );
  }
}
