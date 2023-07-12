import style from './Modal.module.css';

import React, { useEffect } from 'react';

function Modal({ closeModal, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      closeModal();
 
  };

  return (
    <div className={style.modal_container} onClick={closeModal}>
      <div className={style.modal}>{children}</div>
    </div>
  );
}

export default Modal;
