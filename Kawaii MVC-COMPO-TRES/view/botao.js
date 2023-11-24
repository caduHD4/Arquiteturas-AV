// Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Botao = ({ title, onPress }) => {
  return (
    <button className="custom-button" onClick={onPress}>
      {title}
    </button>
  );
};

Botao.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Botao;
