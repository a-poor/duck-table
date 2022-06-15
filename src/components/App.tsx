import React, { useState } from 'react';
import {
  Button,
  Navbar,
  Alignment,
} from "@blueprintjs/core";

export default function App() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => setCount(count + 1);
  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp4-minimal" icon="home" text="Home" />
          <Button className="bp4-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <Button
        intent="success"
        text={`Count: ${count}`}
        onClick={incrementCounter}
      />
      <h1>Hello, World!</h1>
    </>
  );
}