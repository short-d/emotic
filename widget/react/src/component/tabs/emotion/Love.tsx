import React, { Component } from 'react';

import love from './love.svg';
import classNames from 'classnames';
import styles from './Love.module.scss';

interface IProp {
  isActive: boolean;
}

export class Love extends Component<IProp> {
  render() {
    // TODO: replace with animation
    return (
      <img
        className={classNames({
          [styles.Face]: true,
          [styles.active]: this.props.isActive
        })}
        src={love}
      />
    );
  }
}
