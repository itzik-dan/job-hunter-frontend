import React, { useState, useEffect } from "react";
import SearchVid from "./SearchVid";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDisplay from "./VideoDisplay";

// Youtube api key
const KEY = "AIzaSyDXPv9bmNjLpu1xnX6NZcy6npYXIo78_iA";

const Tutorials = () => {
	// Defining video array state and selectd video state
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	// when component is being rendered call youtube api search with initial value of excel
	useEffect(
		(() => {
			return () => {
				onTermSubmit("excel");
			};
		})(),
		[]
	);

	// On submiting the search form call the api and present 5 results to the screen
	const onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 5,
				key: KEY,
			},
		});
		// Updating videos ans selected video states to replect the response output from API
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};
	// function for updating selected video, this function will be passed to to the single video item
	const onSelectVid = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div>
			<SearchVid onTermSubmit={onTermSubmit} />
			<div className="row">
				<div className="col s8">
					<VideoDisplay video={selectedVideo} />
				</div>
				<div className="col s4">
					<VideoList videos={videos} onSelectVid={onSelectVid} />
				</div>
			</div>
		</div>
	);
};

export default Tutorials;
