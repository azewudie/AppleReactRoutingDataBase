import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import YouTube from "react-youtube";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "./YouTubeDetail.module.css";

export default class YouTubeDetail extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "200",
      width: "350",
      playerVars: {
        autoplay: 1,
        // https://developers.google.com/youtube/player_parameters,
      },
    };

    return (
      <div>
        <div>
          <YouTube
            videoId={this.props.Video}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      </div>
    );
  }
}
