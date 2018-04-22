import React from 'react';

const videoListItem = ({video, onVideoSelect}) => {
    // onVideoSelect is a callback function...
    // const video = props.video....above code same this line {video}
    //console.log(video);
    const url = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick= {()=> onVideoSelect(video)}>
            <div style={{display: "block"}}>
                <div>
                    <img src={url} alt={title}/>
                </div>
                <div>
                    <h3>{title}</h3>
                </div>
            </div>
        </li>
    );
}


export default videoListItem;