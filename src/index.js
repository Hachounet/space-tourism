import './style.scss';
/* eslint-disable no-console */
import Logo from './assets/shared/logo.svg';

let LogoImg = new Image();
LogoImg = Logo;

const logoEl = document.querySelector('header > div > img.logo');
logoEl.src = LogoImg;
