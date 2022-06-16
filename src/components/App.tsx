import React, { useState } from 'react';
import {
  Button,
} from "@blueprintjs/core";

import AppBar from './AppBar';
import Home from './Home';

export default function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => setCount(count + 1);
  return (
    <>
      <AppBar />
      <Home />
    </>
  );
}