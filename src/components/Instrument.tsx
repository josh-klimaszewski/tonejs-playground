import * as React from "react";

import { Kick } from "src/engines";

export class Instrument extends React.Component<any> {
  private kick: Kick;
  private ctx: AudioContext;

  constructor(props) {
    super(props);
    this.ctx = new AudioContext();
    this.kick = new Kick(this.ctx);
  }

  public handleClick = () => {
    this.kick.trigger(this.ctx.currentTime);
  };
  public render() {
    return (
      <div>
        <button onClick={this.handleClick}>Instrumnent</button>
      </div>
    );
  }
}
