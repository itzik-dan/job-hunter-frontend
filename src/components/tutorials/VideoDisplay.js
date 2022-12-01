import React from "react";

const VideoDisplay = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="video-container">
			  <iframe title="tutorials" width="853" height="480" src={videoSrc} frameBorder="0" allowFullScreen />
			</div>
			<div className="row">
			  <div className="col s12 m12">
			    <div className="card blue-grey darken-1">
			      <div className="card-content white-text">
			        <span className="card-title">{video.snippet.title}</span>
			        <p>{video.snippet.description}</p>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	);
};

export default VideoDisplay;
