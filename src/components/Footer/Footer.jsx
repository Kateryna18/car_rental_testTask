import React from 'react';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <a className={css.logo}>Rental Car</a>
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
          <a className={css.socialsLogo} href=""></a>SOC
        </li>
        <li className={css.socialsItem}>
          <a className={css.socialsLogo} href=""></a>SOC
        </li>
        <li className={css.socialsItem}>
          <a className={css.socialsLogo} href=""></a>SOC
        </li>
      </ul>
    </footer>
  );
}
