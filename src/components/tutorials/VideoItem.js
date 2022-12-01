import React from "react";

const VideoItem = ({ video, onSelectVid }) => {
	return (
		<div
			onClick={() => onSelectVid(video)}
			className="collection"
			style={{ cursor: "pointer" }}
		>
			<div className="collection-item avatar">
				<img
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
					className="circle"
				/>
				<span className="title">{video.snippet.title}</span>
			</div>
		</div>
	);
};

export default VideoItem;
