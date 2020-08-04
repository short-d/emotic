import React, { Component } from 'react';

import neutral from './neutral.svg';
import classNames from 'classnames';
import styles from './Neutral.module.scss';

interface IProp {
  isActive: boolean;
}

export class Neutral extends Component<IProp> {
  render() {
    // TODO: replace with animation
    return (
      <img
        className={classNames({
          [styles.Face]: true,
          [styles.active]: this.props.isActive
        })}
        src={neutral}
      />
    );
  }
}
