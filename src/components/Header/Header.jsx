import React from 'react';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <a className={css.logo}>Rental Car</a>
        <ul className={css.list}>
          <li>Головна</li>
          <li>Каталог авто</li>
          <li>Обране</li>
        </ul>
      </div>
    </header>
  );
}
