import { Component, h } from '@stencil/core';
import { iconImportantMail } from '../../assets/icons/build/important_mail';
import { iconInstagram } from '../../assets/icons/build/instagram';
import { iconPhone } from '../../assets/icons/build/phone';
import { iconTwitter } from '../../assets/icons/build/twitter';

@Component({
  tag: 'jaume-social-icons',
  scoped: true,
})
export class JaumeSocialIcons {
  iconPhone = iconPhone;
  iconEmail = iconImportantMail;
  iconInstagram = iconInstagram;
  iconTwitter = iconTwitter;

  render() {
    return (
      <div>
        <jaume-icon name="phone" svg={this.iconPhone}></jaume-icon>
        <jaume-icon name="Email" svg={this.iconEmail}></jaume-icon>
        <jaume-icon name="Instagram" svg={this.iconInstagram}></jaume-icon>
        <jaume-icon name="Twitter" svg={this.iconTwitter}></jaume-icon>
      </div>
    );
  }
}
