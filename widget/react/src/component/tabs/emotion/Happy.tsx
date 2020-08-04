import React, { Component } from 'react';

import happy from './happy.svg';
import classNames from 'classnames';
import styles from './Happy.module.scss';

interface IProp {
  isActive: boolean;
}

export class Happy extends Component<IProp> {
  render() {
    // TODO: replace with animation
    return (
      <img
        className={classNames({
          [styles.Face]: true,
          [styles.active]: this.props.isActive
        })}
        src={happy}
      />
    );
  }
}
