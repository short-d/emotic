import React, { Component } from 'react';

import frustrated from './frustrated.svg';

import styles from './Frustrated.module.scss';
import classNames from 'classnames';

interface IProp {
  isActive: boolean;
}

export class Frustrated extends Component<IProp> {
  render() {
    // TODO: replace with animation
    return (
      <img
        className={classNames({
          [styles.Face]: true,
          [styles.active]: this.props.isActive
        })}
        src={frustrated}
      />
    );
  }
}
