import React, { useState } from 'react';
import { Emotic, EmotionType, Feedback } from 'emotic-react';
import styles from './0-Emotic.stories.module.scss';

export default {
  title: 'Emotic',
  component: Emotic
};

interface IState {
  showDiscount: boolean;
  showRefund: boolean;
}

export const ReactToFeedback = (prop: any) => {
  const [state, setState] = useState<Partial<IState>>({
    showDiscount: false,
    showRefund: false
  });

  const showDiscount = () => {
    setState({
      showDiscount: true
    });
  };

  const showRefund = () => {
    setState({
      showRefund: true
    });
  };

  const handleOnFeedbackFiled = (feedback: Feedback) => {
    setState({
      showDiscount: false,
      showRefund: false
    });

    switch (feedback.emotion) {
      case EmotionType.Hate:
        showDiscount();
        break;
      case EmotionType.Terrible:
        showRefund();
        break;
    }
  };

  return (
    <div className={styles.App}>
      {state.showDiscount && (
        <div className={styles.message}>
          Hey, we saw you are not satisfied with our service.
          <br />
          We highly value you as our customer.
          <br />
          <br />
          We want to keep you here. How about having your next month's
          subscription for <a href={'/next-month-free'}>free</a>?
          <br />
          That's on us!
        </div>
      )}
      {state.showRefund && (
        <div className={styles.message}>
          We are very sorry to hear that you are frustrated with our service.
          <br />
          <br />
          We will carefully review your feedback and let you know immediately
          when the problem get fixed.
          <br />
          <br />
          Your trust is our top priority.
          <br />
          <br />
          In case you want to <a href={'/refund'}>cancel</a> the service, we can
          provide you the full refund.
        </div>
      )}
      <Emotic
        apiKey={
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiJlbW90aWMiLCJrZXkiOiJpZ0kifQ.hWgGu9PsOYEDsTPtrw2BCHN8T1gA9w-H64_XJwwo4Io'
        }
        onFeedbackFiled={handleOnFeedbackFiled}
      />
    </div>
  );
};
