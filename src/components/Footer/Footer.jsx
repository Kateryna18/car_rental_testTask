import React from 'react';
import css from './Footer.module.css';
import icons from '../../images/icons.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Link to="/" className={css.logo}>Rental Car</Link>
        <ul className={css.infoList}>
          <li className={css.infoItem}>
            <p className={css.text}>Парк авто</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.text}>Ціни</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.text}>Бронювання</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.text}>Трансфери</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.text}>Умови прокату</p>
          </li>
          <li className={css.infoItem}>
            <p className={css.text}>Контакти</p>
          </li>
        </ul>
        <ul className={css.socialsList}>
          <li className={css.socialsItem}>
            <a className={css.socialsLogo} href="https://uk-ua.facebook.com/" target="_blank">
              <svg width={24} height={24} className={css.icon}>
                <use href={`${icons}#facebook`}></use>
              </svg>
            </a>
          </li>
          <li className={css.socialsItem}>
            <a className={css.socialsLogo} href="https://www.instagram.com/" target="_blank">
              <svg width={24} height={24} className={css.icon}>
                <use href={`${icons}#instagram`}></use>
              </svg>
            </a>
          </li>
          <li className={css.socialsItem}>
            <a className={css.socialsLogo} href="https://twitter.com/?lang=ru" target="_blank">
              <svg width={24} height={24} className={css.icon}>
                <use href={`${icons}#twitter`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
