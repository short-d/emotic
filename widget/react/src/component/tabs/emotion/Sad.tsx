import React, { Component } from 'react';

import sad from './sad.svg';
import classNames from 'classnames';
import styles from './Sad.module.scss';

interface IProp {
  isActive: boolean;
}

export class Sad extends Component<IProp> {
  render() {
    // TODO: replace with animation
    return (
      <img
        className={classNames({
          [styles.Face]: true,
          [styles.active]: this.props.isActive
        })}
        src={sad}
      />
    );
  }
}
