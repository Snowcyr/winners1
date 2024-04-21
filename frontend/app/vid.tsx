// components/VideoPlayer.js

const VideoPlayer = () => {
  return (
    <div className="main">
      <video autoPlay loop muted>
        <source src="./vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .main {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        video {
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
