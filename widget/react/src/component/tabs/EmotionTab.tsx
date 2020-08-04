import React, { Component, createRef, RefObject } from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Promotion } from '../Promotion';
import { Emotion, EmotionType } from '../../entity/emotion';

import './EmotionTab.scss';
import { Love } from './emotion/Love';
import { Happy } from './emotion/Happy';
import { Neutral } from './emotion/Neutral';
import { Sad } from './emotion/Sad';
import { Frustrated } from './emotion/Frustrated';

const emotions: Emotion[] = [
  {
    name: 'Terrible',
    type: EmotionType.Terrible,
    feedbackPlaceholder: 'Please tell us what are you super frustrated about?'
  },
  {
    name: 'Hate',
    type: EmotionType.Hate,
    feedbackPlaceholder: 'Please tell us how can we improve?'
  },
  {
    name: 'Okay',
    type: EmotionType.Okay,
    feedbackPlaceholder: 'Are there anythings you want to see in the future?'
  },
  {
    name: 'Good',
    type: EmotionType.Good,
    feedbackPlaceholder: 'Could you please tell us what you like about?'
  },
  {
    name: 'Love',
    type: EmotionType.Love,
    feedbackPlaceholder: 'Amazing! We are excited to hear what you love!'
  }
];

interface IProps {
  onNextClick?: (emotion: EmotionType, feedbackMessage: string) => void;
}

interface IState {
  selectedEmotionIndex: number;
}

export class EmotionTab extends Component<IProps, IState> {
  private textAreaRef: RefObject<HTMLTextAreaElement> = createRef();

  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedEmotionIndex: -1
    };
  }

  render() {
    const { selectedEmotionIndex } = this.state;
    let placeholder = '';
    if (selectedEmotionIndex > -1) {
      placeholder = emotions[selectedEmotionIndex].feedbackPlaceholder;
    }

    return (
      <div className={'Emotic emotion-tab'}>
        <div className={'emotion-section'}>
          <div className={'title'}>How would you rate your experience?</div>
          <ul className={'emotions'}>
            {this.renderEmotions(this.state.selectedEmotionIndex)}
          </ul>
        </div>
        <div
          className={classNames({
            'bottom-section': true,
            show: this.state.selectedEmotionIndex > -1
          })}
        >
          <div className={'text-feedback'}>
            <div className={'text-field'}>
              <textarea ref={this.textAreaRef} placeholder={placeholder} />
            </div>
            <div className={'options'}>
              <Button onClick={this.handleNextClick}>Next</Button>
            </div>
          </div>
          <Promotion />
        </div>
      </div>
    );
  }

  renderEmotions(selectedEmotionIndex: number) {
    return emotions.map((emotion, index) => {
      const isActive = index === selectedEmotionIndex;
      return (
        <li key={index}>
          <div
            className={classNames({
              icon: true
            })}
            onClick={this.handleEmotionClick(index)}
          >
            {this.renderEmotion(emotion.type, isActive)}
          </div>
          <div className={'label'}>{emotion.name}</div>
        </li>
      );
    });
  }

  renderEmotion(emotionType: EmotionType, isActive: boolean) {
    switch (emotionType) {
      case EmotionType.Love:
        return <Love isActive={isActive} />;
      case EmotionType.Good:
        return <Happy isActive={isActive} />;
      case EmotionType.Okay:
        return <Neutral isActive={isActive} />;
      case EmotionType.Hate:
        return <Sad isActive={isActive} />;
      case EmotionType.Terrible:
        return <Frustrated isActive={isActive} />;
    }
  }

  reset = () => {
    this.setState({
      selectedEmotionIndex: -1
    });
  };

  handleEmotionClick = (index: number): (() => void) => {
    return () => {
      this.setState(
        {
          selectedEmotionIndex: index
        },
        () => {
          if (this.textAreaRef.current) {
            this.textAreaRef.current.focus();
          }
        }
      );
    };
  };

  handleNextClick = () => {
    if (!this.props.onNextClick) {
      return;
    }

    const emotionType = emotions[this.state.selectedEmotionIndex].type;
    const feedback = this.textAreaRef.current?.value || '';

    this.props.onNextClick(emotionType, feedback);
  };
}
