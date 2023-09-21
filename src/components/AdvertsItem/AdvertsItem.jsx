import React from 'react';
import css from './AdvertsItem.module.css';
import icons from '../../images/icons.svg';

export default function AdvertsItem({ advert }) {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    functionalities,
    address,
  } = advert;

  const newAdress = address.split(' ');

  const chartersType = type.split(' ')[0].split('');
  const prepeadedType = chartersType
    .filter(charterType => charterType !== ',')
    .join('');

  const newFunctionalities = functionalities[0]
    .split(' ')
    .splice(0, 2)
    .join(' ');

  return (
    <li className={css.item}>
      <div className={css.boxImg}>
        <img src={img} alt={make} stroke={'#3470FF'} className={css.img} />
        <svg width={18} height={18} className={css.icon}>
          <use href={`${icons}#normal`}></use>
        </svg>
      </div>
      <div className={css.mainInfoBox}>
        <h2 className={css.tittleCard}>
          {make} <span className={css.modelCard}>{model}</span>,{' '}
          <span>{year}</span>
        </h2>
        <p className={css.priceCard}>{rentalPrice}</p>
      </div>
      <div className={css.infoBox}>
        <span>{newAdress[3]} |</span>
        <span> {newAdress[4]} |</span>
        <span> {rentalCompany} |</span>
        <span> Premium |</span>
        <span> {prepeadedType} |</span>
        <span> {model} |</span>
        <span> {mileage} |</span>
        <span> {newFunctionalities}</span>
      </div>
      <button type="submit" className={css.button}>
        Learn more
      </button>
    </li>
  );
}
