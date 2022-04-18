import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'jaume-button',
  styleUrl: './jaume-button.css',
  scoped: true,
})
export class JaumeButton {
  /**
   * Legend to render in button
   */
  @Prop() message: string;

  /**
   * If its a secondary of primary button
   */
  @Prop() isSecondary = false;

  /**
   * Alt name for accessibility
   */
  @Prop() altName: string;

  @Prop() color = 'primary';

  get buttonClasses() {
    let classes = 'button';
    classes += this.isSecondary ? ' is-secondary' : '';
    return classes;
  }

  get buttonContent() {
    return this.message;
  }

  get buttonElement(): HTMLElement {
    return <button class={this.buttonClasses}>{this.buttonContent}</button>;
  }

  render() {
    return this.buttonElement;
  }
}
