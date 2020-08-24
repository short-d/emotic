import React, {Component, createRef} from 'react';

import classNames from 'classnames';
import styles from './Neutral.module.scss';
import './Neutral.module.scss';

interface IProp {
  isActive: boolean;
}

const neutralMouthSVGPath = "M38.6,65.7h22.5c1.2,0,2.2,1.1,2.2,2.5l0,0c0,1.4-1,2.5-2.2,2.5H38.6c-1.2,"
  + "0-2.2-1.1-2.2-2.5l0,0 C36.3,66.8,37.3,65.7,38.6,65.7z";

export class Neutral extends Component<IProp> {
  private svgRef = createRef<SVGSVGElement>();

  componentDidMount(): void {
    requestAnimationFrame(this.updateValue);
  }

  updateValue = () => {
    const eyesAndMouthElements = this.svgRef.current!
      .querySelectorAll<HTMLElement>('.face__eyesAndMouth');
    if (!eyesAndMouthElements) {
      return;
    }
    const eyesAndMouthTransformValue = getComputedStyle(eyesAndMouthElements[0]).transform;
    for (let i = 0; i < eyesAndMouthElements.length; i++) {
      eyesAndMouthElements[i].style
        .setProperty('--transformExitValue', eyesAndMouthTransformValue);
    }
    requestAnimationFrame(this.updateValue);
  };

  render() {
    return (
      <svg
        className={classNames(`${styles.face}`, {
          [`${styles.face_active}`]: this.props.isActive
        })}
        ref={this.svgRef}
        width="60" height="60" viewBox="0 0 100 100"
      >
        <circle className={`${styles.face__background}`} cx="49.5" cy="49.5" r="49.5"/>
        <circle className={`${styles.face__eyesAndMouth} face__eyesAndMouth`} cx="21.6" cy="50.7" r="6"/>
        <circle className={`${styles.face__eyesAndMouth} face__eyesAndMouth`} cx="77.4" cy="50.7" r="6"/>
        <path className={`${styles.face__eyesAndMouth} face__eyesAndMouth`} d={neutralMouthSVGPath}/>
      </svg>
    );
  }
}
