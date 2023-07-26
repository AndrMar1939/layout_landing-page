'use strict';

const body = document.querySelector('body');
const openMenuButton = document.querySelector('#menu-open');
const closeMenuButton = document.querySelector('#menu-close');
const menu = document.querySelector('#page-menu');
const menuNavLinks = document.querySelectorAll('.menu__link');

const toClickOnMenu = () => {
  menu.classList.toggle('page__menu--active');
  body.classList.toggle('page__body--menu-active');
};

openMenuButton.addEventListener('click', toClickOnMenu);

closeMenuButton.addEventListener('click', toClickOnMenu);

const navLinks = Array.from(menuNavLinks);

navLinks.forEach((item) => {
  item.addEventListener('click', toClickOnMenu);
});
