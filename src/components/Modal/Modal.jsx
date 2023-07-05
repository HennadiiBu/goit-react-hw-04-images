import style from './Modal.module.css';

import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={style.modal_container} onClick={this.props.closeModal}>
        <div className={style.modal}>{this.props.children}</div>
      </div>
    );
  }
}


