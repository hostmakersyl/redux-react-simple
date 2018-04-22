import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    // Hear below line i just set an attribute to able to take the value of YTsearch in App.js file.
    // bellow props.videos.map will take array value from App.js through video attribute and 
    // map function will rearrange array to pass the value as <li> and after that
    // send the value in App.js file to take
    // the value of this.state = {video: []} value. Because YTsearch 
    // Return an array value..which will be stored in this.setState({viedo}) and it will
    // again update this.state and pass the value <VideoList videos={this.state.videos} /> for output
    const VideoItem = props.videos.map((video) => {   
       return (
           <VideoListItem
               onVideoSelect = {props.onVideoSelect}
               key={video.etag}
               video={video}
           />
       );
    });

    return(
        <ul className="">
            {/* {props.videos.length} */}
            { VideoItem }

        </ul>
    );
}

export default VideoList;