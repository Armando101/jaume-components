import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'jaume-button',
  styleUrl: './jaume-button.css',
  scoped: true,
})
export class JaumeButton {
  @Prop() isSecondary = false;

  get buttonClasses() {
    let classes = 'button';
    classes += this.isSecondary ? ' is-secondary' : '';
    return classes;
  }

  render() {
    console.log(this.buttonClasses);
    return <button class={this.buttonClasses}>Currículum</button>;
  }
}
