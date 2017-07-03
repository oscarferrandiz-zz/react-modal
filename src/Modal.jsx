import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-addons-css-transition-group';
import classnames from 'classnames';

export default function Modal({ opened, children, className, onClose }) {
  const _onClose = () => typeof onClose === 'function' && onClose();
  const cNames = classnames('modal', { [className]: !!className });

  return (
    <section className={cNames}>
      <Transition
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {opened &&
          <div className="modal__backdrop">
            <div className="modal__dialog">
              <button type="button" onClick={_onClose}>Close</button>
              <div className="modal__dialog__content">{children}</div>
            </div>
          </div>
        }
      </Transition>
    </section>
  );
}

Modal.propTypes = {
  opened: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
  className: PropTypes.string
};

Modal.defaultProps = {
  opened: false,
  children: null,
  onClose: null,
  className: null
};
