import React from 'react';
import css from './Modal.module.css';

export default function Modal({ active, setActive, carDetail }) {
  console.log(carDetail);
  const {
    id,
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
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = carDetail;

  const newAdress = address.split(' ');
  const chartersType = type.split(' ')[0].split('');
  const prepeadedType = chartersType
    .filter(charterType => charterType !== ',')
    .join('');

  const newRentalConditions = rentalConditions.split('\n');
  console.log(newRentalConditions);

  return (
    <div className={css.modal} onClick={() => setActive(false)}>
      <div className={css.modalContent} onClick={e => e.stopPropagation}>
        <img src={img} alt={make} className={css.img} />
        <h2 className={css.tittleCard}>
          {make} <span className={css.modelCard}>{model}</span>,{' '}
          <span>{year}</span>
        </h2>
        <div className={css.infoBox}>
          <span>{newAdress[3]} |</span>
          <span> {newAdress[4]} |</span>
          <span> id:{id} |</span>
          <span> Year:{year} |</span>
          <span> Type: {prepeadedType} |</span>
          <span> Fuel Consumption: {fuelConsumption} |</span>
          <span> Engine Size: {engineSize} |</span>
        </div>
        <p className={css.description}>{description}</p>
        <p className={css.detail}>Accessories and functionalities:</p>
        <p className={css.infoBox}>
          {accessories.map(accessorie => (
            <span>{accessorie} | </span>
          ))}
          {functionalities.map(functionaliti => (
            <span>{functionaliti} | </span>
          ))}
        </p>
        <p className={css.detail}>Rental Conditions: </p>
        <div className={css.boxCondition}>
          {newRentalConditions.map(item => (
            <p className={css.condition}>{item}</p>
          ))}
          <p className={css.condition}>
            Mileage: <span className={css.value}>{mileage}</span>
          </p>
          <p className={css.condition}>
            Price: <span className={css.value}>{rentalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
