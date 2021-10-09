import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './style.css';

function Loading() {
  return (
    <p className="loading-message">
      <FaSpinner className="spinner" />
      Carregando...
    </p>
  );
}

export default Loading;
