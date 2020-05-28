import React from 'react';
import cn from 'classnames';
import './Icon.scss';

import { ReactComponent as User } from './content/user.svg';
import { ReactComponent as Password } from './content/password.svg';
import { ReactComponent as Time } from './content/time.svg';

import { ReactComponent as Facebook } from './content/facebook.svg';
import { ReactComponent as Instagram } from './content/instagram.svg';
import { ReactComponent as Telegram } from './content/telegram.svg';
import { ReactComponent as VK } from './content/vk.svg';
import { ReactComponent as Youtube } from './content/youtube.svg';
import { ReactComponent as Linkedin } from './content/linkedin.svg';
import { ReactComponent as Google } from './content/google.svg';
import { ReactComponent as Pinterest } from './content/pinterest.svg';
import { ReactComponent as Thumblr } from './content/thumblr.svg';
import { ReactComponent as Twitter } from './content/twitter.svg';
import { ReactComponent as Reddit } from './content/reddit.svg';

const iconsData = [
  { label: 'user', component: User },
  { label: 'password', component: Password },
  { label: 'time', component: Time },
  { label: 'facebook', component: Facebook },
  { label: 'instagram', component: Instagram },
  { label: 'telegram', component: Telegram },
  { label: 'vk', component: VK },
  { label: 'youtube', component: Youtube },
  { label: 'linkedin', component: Linkedin },
  { label: 'google', component: Google },
  { label: 'pinterest', component: Pinterest },
  { label: 'thumblr', component: Thumblr },
  { label: 'twitter', component: Twitter },
  { label: 'reddit', component: Reddit },
];

const Icon = ({ content, ...props }) => {
  let icon = '';

  const res = iconsData.filter(icon => icon.label === content)[0];
  if (!res) {
    return null;
  }

  icon = <SvgIcon Component={res.component} {...props} />;
  if (!icon) {
    return null;
  }

  return icon;
};

export default Icon;

const SvgIcon = ({ Component, ...props }) => {
  const { content, mix } = props;
  return (
    <Component
      className={cn('svg-icon', content && `svg-icon_content_${content}`, mix)}
    />
  )
};
