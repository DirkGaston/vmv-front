import ReactPlayer from "react-player";

function VideoPlayer({ url }) {
  return (
    <div className="flex justify-center items-center w-full">
      <ReactPlayer url={url} controls={true} />
    </div>
  );
}

export default VideoPlayer;
