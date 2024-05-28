import React from 'react';

import { StackedBarChart } from './components/StackedBarChart/StackedBarChart';
import { cnApp } from './App.classname';

import './App.css';

const App = () => {
  return (
    <main className={cnApp()}>
      <StackedBarChart url="https://rcslabs.ru/ttrp1.json" />
      <hr />
      {/* <StackedBarChart url="https://rcslabs.ru/ttrp2.json" />
      <hr />
      <StackedBarChart url="https://rcslabs.ru/ttrp3.json" />
      <hr />
      <StackedBarChart url="https://rcslabs.ru/ttrp4.json" />
      <hr />
      <StackedBarChart url="https://rcslabs.ru/ttrp5.json" />
      <hr /> */}
    </main>
  );
}

export { App };
