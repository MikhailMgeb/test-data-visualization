import React from 'react';

import { StackedBarChart } from './components/Column/StackedBarChart';
import { cnApp } from './App.classname';

import './App.css';

const App = () => {
  return (
    <main className={cnApp()}>
      <StackedBarChart url="https://rcslabs.ru/ttrp1.json" />
    </main>
  );
}

export { App };
