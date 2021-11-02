import React from "react";

const VideoPlayer = (props) => {

  const _togglePlay = (event) => {
    if (event.target.paused) {
      event.target.play();
    } else {
      event.target.pause();
    }
  };

  return (
    <video poster={ process.env.PUBLIC_URL + "/img/video-banner.png" } onClick={ event => _togglePlay(event) }>
      <source src={ props.src } type="video/mp4" />
    </video>
  );
};

export default React.memo(VideoPlayer);
