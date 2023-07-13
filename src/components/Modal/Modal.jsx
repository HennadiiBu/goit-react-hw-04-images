import style from './Modal.module.css';

import React, { useEffect } from 'react';

function Modal({ closeModal, children }) {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

  return (
    <div className={style.modal_container} onClick={closeModal}>
      <div className={style.modal}>{children}</div>
    </div>
  );
}

export default Modal;
