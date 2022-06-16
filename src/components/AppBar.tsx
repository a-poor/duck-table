import React, { useState } from 'react';
import {
  Button,
  Navbar,
  Alignment,
  Icon, 
  IconSize,
} from "@blueprintjs/core";

const {Group, Heading, Divider} = Navbar;

export interface IAppBarProps {
}

export default function AppBar({}: IAppBarProps) {
  return (
    <>
      <Navbar>
        <Group align={Alignment.LEFT}>
          <Heading>
            <Icon icon="th" /> {" "}
            DuckTable
          </Heading>
          <Divider />
          <Button className="bp4-minimal" icon="home" text="Home" />
          <Button className="bp4-minimal" icon="document" text="Files" />
        </Group>
      </Navbar>
      <div style={{height: "15px"}}/>
    </>
  );
}