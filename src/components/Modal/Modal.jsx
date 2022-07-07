import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import {} from './Modal.styled';
import './Modal.scss';
// ссылка на портал
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  //  после рендера вызивается componentDidMount
  componentDidMount() {
    // не работает
    window.addEventListener('keydown', this.handleKeyDown);
  }
  // вызывается при розмонтировании компонента чистит снимает слушателя очень влияет на производительность
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
