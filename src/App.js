import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './search_bar/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './search_bar/video_list';
import VideoDetails from './search_bar/video_details';

const API_KEY = 'AIzaSyBTtD-m512ovI_DlMP0QqRd1CTdVCXpW3E';

// YTSearch({key:API_KEY, term:'surfboards'}, function(data){
//  console.log(data);
// });
class App extends Component {
 // 
 constructor(props){
   super(props);

   this.state = {
       videos: [],
       selectedVideo: null
   };

    this.videoSearch('surfboard'); // Initial Search
 }

 videoSearch(term){
     YTSearch({key:API_KEY, term: term}, (videos) => {
         this.setState({
             videos: videos,
             selectedVideo: videos[0]
         });
         //console.log(videos);
         //this.setState({ videos }) // Similar code ({videos: videos})

     });
 }
  render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <header >
          <h1 className="App-title">Welcome to Youtube search API</h1>
        </header>
          {/*{term => this.videoSearch(term)}*/}
          <SearchBar onSearchTermChange ={ videoSearch } />
          <VideoDetails video={this.state.selectedVideo}/>
          <VideoList
              //The story of onVideoSelect is
              // First App.js file send requiest to video_list.js file that i have sending requiest to this select this video which user click
              // after that i have added onVideoSelect property in video_list.js file. and video_list.js file since import video_list_item.js file and
              // it sends the requiest to video_list_item.js file that please add a callback function as ----onVideoSelct--- and add it <li> item so that
              // as Javascript event onClick....so that when <li> item has been click that time it select....
              // This work has been add last .........Actually it goes from last to first...
              // প্রথমে এপ ফা্লি
              onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
          />
        
      </div>
    );
  }
}

export default App;
