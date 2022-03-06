import React from 'react';
import { useClickContext } from './ClickContext';

export default () => {
  const { nbClick } = useClickContext();
  return <h1>You've clicked {nbClick} times!</h1>;
};
