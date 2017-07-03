import React from 'react';

import { storiesOf } from '@storybook/react';
import Modal from '../src/Modal';

class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>Toggle modal!</button>
        <Modal opened={this.state.opened}>
          <div>Hello, Im modal content!</div>
        </Modal>
      </div>
    );
  }
}

storiesOf('Modal', module)
  .add('to Storybook', () => <ModalDemo />);
