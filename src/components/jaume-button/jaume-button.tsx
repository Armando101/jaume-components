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
   * Icon to be render, this only applies if its an icon button
   */
  @Prop() icon: string;

  /**
   * Alt name for accessibility
   */
  @Prop() altName: string;

  get buttonClasses() {
    let classes = 'button';
    classes += this.icon ? '-icon' : '';
    classes += this.isSecondary ? ' is-secondary' : '';
    return classes;
  }

  get buttonContent() {
    if (this.icon) {
      return <img src={this.icon} alt={this.altName} />;
    }
    return this.message;
  }

  get buttonElement(): HTMLElement {
    if (this.icon) {
      return <a class={this.buttonClasses}>{this.buttonContent}</a>;
    }
    return <button class={this.buttonClasses}>{this.buttonContent}</button>;
  }

  render() {
    return this.buttonElement;
  }
}
