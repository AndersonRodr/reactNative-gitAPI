import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native';

import './config/ReactotronConfig'; 
import Routes from './routes';

//console.tron.warn('hahahahaha');

export default function App() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="purple" />
        <Routes />
      </>
    );
};