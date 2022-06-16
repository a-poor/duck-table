import React from 'react';
import {
  Button,
  ButtonGroup,
  Callout,
  Icon,
  Card,
  Elevation,
  NonIdealState,
  NonIdealStateIconSize,
  H1,
  H2,
  H5,
} from "@blueprintjs/core";


function DBCard() {
  return (
    <Card interactive elevation={Elevation.TWO}>
    </Card>
  );
}

export default function Home() {
  return (
    <div
      style={{
        margin: "auto 50px"
      }}
    >
      <H1>Home</H1>
      <Callout 
        title="Quick Start" 
        icon="info-sign" 
        intent="primary"
      >
        <p>
          Get started with DuckTable.
        </p>
        <ButtonGroup minimal>
          <Button icon="plus" text="New DB" />
          <Button icon="import" text="Open DB" />
        </ButtonGroup>
      </Callout>
      <div style={{height: "25px"}}/>

      <H2>Databases</H2>
      {/* <DBCard /> */}
      {/* <DBCard /> */}


      <NonIdealState 
        icon="folder-open"
        iconSize={NonIdealStateIconSize.SMALL}
        title="No databases"
        description="No databases found."
        layout="horizontal"
        action={
          <Button icon="plus" intent="primary">
            Create DB
          </Button>
        }
      />

    </div>
  );
}
