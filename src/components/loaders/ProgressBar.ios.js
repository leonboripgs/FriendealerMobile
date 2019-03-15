/* @flow */
import React, { Component } from "react";
import { ProgressViewIOS } from "react-native";

export default class ProgressBarNB extends Component<{progress:number,color:string}> {
  render() {
    return (
      <ProgressViewIOS
        {...this.props}
        progress={this.props.progress ? this.props.progress / 100 : 0.5}
        color={this.props.color ? this.props.color : "#FFF"}
        trackTintColor="rgba(255,255,255,0.5)"
      />
    );
  }
}
