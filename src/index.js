import _ from 'lodash';
import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// create a new component. this component should produce some HTML
const API_KEY = 'AIzaSyB-T5NfPqLvor0VIEYQCfdAMGJIkinBiNo';

/*const App = () => {
return (
  <div>
    <SearchBar />
  </div>
); // JSX
}*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('bmx');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}
// take this component's HTML and put it in the DOM

ReacDOM.render(<App />, document.querySelector('.container')); // <App /> creates an instance of App thanks to JSX
