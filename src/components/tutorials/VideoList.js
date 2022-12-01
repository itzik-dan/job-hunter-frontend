import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVid }) => {
	// looping through the output of api and creating videoItem component for each one
	const renderedList = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onSelectVid={onSelectVid}
				video={video}
			/>
		);
	});
	return <div>{renderedList}</div>;
};

export default VideoList;
