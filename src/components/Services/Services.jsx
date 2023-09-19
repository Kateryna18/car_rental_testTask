import React from 'react';
import css from './Services.module.css';
import carRedemptionImg from '../../images/carSell.jpg';
import truckImg from '../../images/carBig.png';
import carAbroad from '../../images/carAbroad.png';
import daileCarImg from '../../images/carDay.avif';
import myCarImg from '../../images/myCar.avif';
import carHelpWayImg from '../../images/carHelp.jpg';

export default function Services() {
  return (
    <>
      <h1 className={css.tittle}>Наші послуги</h1>
      <ul className={css.list}>
            <li className={css.item}>
              <a href="" className={css.link}>
                <div className={css.thumb}>
                  <img
                  className={css.img}
                    src={carHelpWayImg}
                    alt="Евакуатор"
                  />
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Допомога в дорозі</h2>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a href="" className={css.link}>
                <div className={css.thumb}>
                  <img className={css.img} src={carRedemptionImg} alt="Оренда авто з правом викупу" />
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Оренда авто з правом викупу</h2>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a href="" className={css.link}>
                <div className={css.thumb}>
                  <img className={css.img} src={truckImg} alt="Вантажне авто" />
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Оренда вантажного авто</h2>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a href="" className={css.link}>
                <div className={css.thumb}>
                  <img
                  className={css.img}
                    src={carAbroad}
                    alt="Оренда авто з виїздом за кордон"
                  />
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Оренда авто з виїздом за кордон</h2>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a href="" className={css.link}>
                <div className={css.thumb}>
                  <img
                  className={css.img}
                    src={daileCarImg}
                    alt="Добова оренда авто"
                  />
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Добова оренда авто</h2>
                </div>
              </a>
            </li>
            <li className={css.item}>
              <a href="" className={css.link}>
                <div className={css.thumb}>
                  <img className={css.img} src={myCarImg} alt='Чоловік за кермом авто'/>
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Здай своє авто в оренду</h2>
                </div>
              </a>
            </li>
          </ul>
    </>
  );
}
