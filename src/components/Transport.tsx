import * as React from "react";

import { Instrument } from "src/components"

export class Transport extends React.Component<any> {
  constructor(props) {
    super(props);
  }
  public render() {
    return (
      <div>
        <h1 style={{ color: "black" }}>Web 808</h1>
        <Instrument />
      </div>
    );
  }
}
