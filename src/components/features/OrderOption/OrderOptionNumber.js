import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({limits, currentValue, price, setOptionValue}) => {

  return (
    <div className={styles.number}>
      <input 
        className={styles.inputSmall} 
        type='number' 
        value={currentValue}
        min={limits.min}
        onChange={event => setOptionValue(event.currentTarget.value)}
      ></input>
      <p>{price} price</p>
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  min:  PropTypes.number,
  max: PropTypes.number,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;

