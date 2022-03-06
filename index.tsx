import React, { Component } from 'react';
import { render } from 'react-dom';
import { ClickContextProvider } from './ClickContext';
import Commands from './Commands';
import Display from './Display';
import './style.css';

const App = (props) => {
  return (
    <ClickContextProvider>
      <Display />
      <Commands />
    </ClickContextProvider>
  );
};

render(<App />, document.getElementById('root'));
