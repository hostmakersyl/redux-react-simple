
import React from 'react';

const VideoDetails = ({video}) => {
    if(!video){
       return <div>Loading .............</div>
    }
    const videoId = video.id.videoId;
    { /* Same const url = 'https://www.youtube.com/embed/' + videoId; */}
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const videDescription = video.snippet.description;
    const videoTitle = video.snippet.title;
    return (
        <div>
            <div>  <iframe src={videoUrl}> </iframe>  </div>
            <div> <h2>{videoTitle} </h2>  </div>
            <div>{videDescription}</div>
        </div>
    );
}

export default VideoDetails;