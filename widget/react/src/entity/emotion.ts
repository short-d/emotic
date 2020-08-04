export enum EmotionType {
  Terrible,
  Hate,
  Okay,
  Good,
  Love
}

export interface Emotion {
  name: string;
  type: EmotionType;
  feedbackPlaceholder: string;
}
